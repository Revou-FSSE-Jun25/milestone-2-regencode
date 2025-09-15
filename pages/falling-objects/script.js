const startButton = document.getElementById("start-button");
const gameBlocks = document.querySelectorAll("#game-grid .game-block");
const gameGrid = document.getElementById("game-grid");
const distance = document.getElementById("distance");

const ROWS = 5;
const COLS = 5;
const TICKS_PER_SECOND = 60;


const waitSeconds = (seconds) => {
    return new Promise (resolve => setTimeout(resolve, seconds*1000));
}

const count_up = async () => {
    while(seconds > 0) {
        timer.textContent = 0;
        await waitSeconds(1);
        seconds += 1; 
    }
}

const randint = (lo, hi) => {
    return Math.floor(Math.random() * (hi - lo + 1) + lo);
}

const random_choice = (arr) => {
    let max = arr.length;
    let idx = Math.floor(Math.random() * max);
    return arr[idx];
}

class GameObject {
    constructor(x, y, image_file) {
        this.x = x;
        this.y = y;
        this.image = image_file;
    }
    get_position() { return [this.x, this.y];}
    move_left() { if(this.x > 0) this.x--; else return }
    move_right() { if(this.x < ROWS-1) this.x++; else return }
    move_up() { if(this.y > 0) this.y--; else return }
    move_down() { if(this.y < COLS-1) this.y++; else return }
    is_within_bounds () {
        if(this.x < 0 || this.x > ROWS-1 || this.y < 0 || this.y > COLS-1) {
            return false;
        }
        return true;
    }
}

class Player extends GameObject {
    constructor(x, y, image_file, num_lives) {
        super(x, y, image_file);
        this.num_lives = num_lives;
    }  
    get_lives() { return this.num_lives; }
}

class Obstacle extends GameObject {
    constructor(x, y, image_file) {
        super(x, y, image_file);
    }  
    move_down() { this.y++; }
    is_colliding_player(player) {
        if(this.x === player.x && this.y == player.y) return true;
        return false;
    }
}

const clear_cell = (x, y) => {
    gameBlocks[x + (ROWS*y)].textContent = " ";
}

const clear_board = () => {
    gameBlocks.forEach((block) => {
        block.textContent = " ";
    });
}

const draw_object = (obj) => {
    gameBlocks[obj.x + (ROWS*obj.y)].textContent = obj.image;
}


let obstacleList = [];
const spawn_obstacle = (x, y) => {
    return new Obstacle(x, y, "X");
}
const spawn_obstacle_row = (obstacles) => {
    let numObstacles = randint(0, 4);
    let valid_x = [0, 1, 2, 3, 4];
    for(let i = 0; i < numObstacles; i++){
        let chosen_x = random_choice(valid_x);
        obstacles.push(spawn_obstacle(chosen_x, 0));
    }
    return obstacles;
}
const check_obstacles_boundaries = (obstacles) => {
    for(let i = 0; i < obstacles.length; i++) {
        if(!obstacles[i].is_within_bounds()) {
            obstacles.splice(i, 1);
            i--; // decrement because i now points to the next element
        } 
    }
    return obstacles;
}

const check_obstacles_playercollide = (obstacles, player) => {
    for(let i = 0; i < obstacles.length; i++) {
        if(obstacles[i].is_colliding_player(player)) {
            return true;
        } 
    }
    return false;
}

const move_obstacles_down = (obstacles) => {
    obstacles.forEach((obs) => {
        obs.move_down();
    });
    return obstacles;
}

const draw_object_list = (objList) => {
    objList.forEach((obj) => {
        draw_object(obj);    
    }); 
}



startButton.addEventListener("click", () => {
    distance.textContent = 0;
    startButton.style.display = "none";
    gameGrid.style.display = "grid";
    let player = new Player(2, 4, "A", 1);

    document.addEventListener("keypress", (e) => {
        if(e.key === "w" || e.key === "W") {
            player.move_up();
        }
        else if(e.key === "s" || e.key === "S") {
            player.move_down();
        }
        else if(e.key === "a" || e.key === "A") {
            player.move_left();
        }
        else if(e.key === "d" || e.key === "D") {
            player.move_right();
        }
    });
    let gameRunning = true;
    (async () => {
        while(gameRunning) {
            distance.textContent = parseInt(distance.textContent) + 1;
            obstacleList = spawn_obstacle_row(obstacleList);
            await waitSeconds(0.5);
            obstacleList = move_obstacles_down(obstacleList);
            obstacleList = check_obstacles_boundaries(obstacleList);
        }
    })();

    (async () => {
        while(gameRunning) {
            draw_object_list([player, ...obstacleList])
            if(check_obstacles_playercollide(obstacleList, player)) {
                gameRunning = false;
            }
            await waitSeconds(1/TICKS_PER_SECOND);
            clear_board();
        }
    })().then(
        () => {
            gameGrid.style.display = "none"; 
            startButton.style.display = "flex"; 
            obstacleList = [];
        },
        (e) => {
            console.error(`Error: ${e}`);
        }
    );
});





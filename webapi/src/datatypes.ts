// Define the type User to match the JSON structure from https://randomuser.me/api
type PlayerStats = {
    id: number;
    name: string;
    position: string;
    team: string;
    gamesPlayed: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;
    fights: number;
    hits: number;
    shotsBlocked: number;
};

// Define the type User to match the JSON structure from https://randomuser.me/api
type PlayerAttributes = {
    name: string;
    team: string;
    passing: number;
    shootingAccuracy: number;
    shootingRange: number;
    checking: number;
    stickChecking: number;
    faceoffs: number;
    speed: number;
    strength: number;
    fighting: number;
};

export { PlayerStats, PlayerAttributes };

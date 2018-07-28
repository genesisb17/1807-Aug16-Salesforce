Create Table player (
    p_id number(10) primary key,
    name varchar2(200),
    jersey number(10),
    yards number(10),
    team varchar2(200)
);

Create Table team (
    name varchar2(200) primary key,
    owner varchar2(200),
    city varchar2(200)
);

Create Table coach (
    c_id number(10) primary key,
    name varchar(200),
    team varchar(200),
    wins number(10),
    losses number(10)
);

Create Table game (
    g_id number(10) primary key,
    arena varchar2(200),
    attendance number(200)
);

Create Table game_player (
    g_id number(10),
    p_id number(10)
);

Alter Table game_player
    Add Constraint FK_gp_player
    Foreign Key (p_id) References player (p_id);

Alter Table game_player
    Add Constraint FK_gp_game 
    Foreign Key (g_id) References game (g_id);

Alter Table player
    Add Constraint FK_player_team
    Foreign Key (team) References team (name);

Alter Table coach
    Add Constraint FK_coach_team
    Foreign Key (team) References team (name);
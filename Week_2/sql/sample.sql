create table PLAYER (p_id number(10) primary key,
NAME varchar2(200),
JERSEY number(10),
YARDS number(10),
TEAM varchar2(200));

create table TEAM ( 
NAME varchar2(200) primary key,
OWNER varchar2(200),
CITY varchar2(200));

create table COACH (
NAME varchar2(200),
TEAM varchar2(200),
WINS number(10),
LOSSES number(10));

create table GAME (G_ID number(10) primary key,
ARENA varchar(200),
ATTENDANCE number(10));

create table GAME_PLAYER(
G_ID number(10),
P_ID number(10));

alter table PLAYER add constraint FK_PLAYER_TEAM foreign key
(TEAM) references TEAM (NAME);
alter table COACH add constraint FK_COACH_TEAM foreign key
(TEAM) references TEAM (NAME);
alter table GAME_PLAYER add constraint FK_GP_Player foreign key
(P_ID) references Player (P_ID);
alter table GAME_PLAYER add constraint FK_GP_Game foreign key
(G_ID) references Game (G_ID);


--drop table PLAYER;
--drop table TEAM;

insert into PLAYER values (1,'Tom Brady', 12, 0, 'Cheaters');
insert into PLAYER values (2,'Bob', 45, -50, 'Traitors');
insert into PLAYER values (3,'Thanos', 50, 50, 'Perfectly Balanced');
insert into PLAYER values (4,'Sporty McSportface', 00, 99, 'Salesforce United');
insert into PLAYER values (5,'Rusty Shackelford', 3, 555, 'The Flying Chanclas');
insert into PLAYER (name, team) values (6,'Jay Cutler', 'Dolphins');
update player set team = 'Revature' where name = 'Sporty McSportface';

insert into PLAYER values (7,'Nicol Bolas Aspect', 1, 999999, 'Infinite Consortium');
insert into PLAYER values (8,'Tezzeret', 2, 200, 'Infinite Consortium');
insert into PLAYER values (9,'Ral Zarek', 3, 1000, 'Infinite Consortium');
insert into PLAYER values (10,'Sarkhan Vol', 4, 599, 'Infinite Consortium');
insert into PLAYER values (11,'Gideon Jura', 1, 500, 'Gatewatch');
insert into PLAYER values (12,'Jace Beleren', 2, 100, 'Gatewatch');
insert into PLAYER values (13,'Chandra Nalaar', 4, 200, 'Gatewatch');
insert into PLAYER values (14,'Ajani', 6, 500, 'Gatewatch');
insert into PLAYER values (15,'Teferi', 7, 50, 'Gatewatch');

insert into PLAYER values (16,'Jazz', 1, 5000, 'Autobots');
insert into PLAYER values (17,'Ironhide', 2, 5000, 'Autobots');
insert into PLAYER values (18,'Bumblebee', 3, 3000, 'Autobots');
insert into PLAYER values (19,'Ratchet', 4, 3000, 'Autobots');

insert into PLAYER values (20,'Starscream', 1, 0, 'Decepticons');
insert into PLAYER values (21,'Shockblast', 2, 1000, 'Decepticons');
insert into PLAYER values (22,'Soundwave', 3, 50, 'Decepticons');
insert into PLAYER values ('23', 'Astrotrain', 4, 5000, 'Decepticons');

insert into TEAM values ('Infinite Consortium', 'Nicol Bolas', 'Dominaria');
insert into TEAM values ('Gatewatch', 'Ugin', 'Tarkir');
insert into TEAM values ('Autobots', 'Optimus Prime', 'Cybertron');
insert into TEAM values ('Decepticons', 'Megatron', 'Cybertron');

select * from PLAYER where YRDS > 100;
select name from PLAYER where YARDS > 100;
select name, team from PLAYER where YARDS > 100;
select sum(yards) from PLAYER where YARDS <100;
select count(name), min(YARDS) from PLAYER group by TEAM;
select max(YARDS), TEAM from PLAYER group by TEAM;
select * from PLAYER where TEAM like '%i%';
select * from PLAYER order by YARDS desc;
select abs(YARDS) from PLAYER;

select * from PLAYER;
select * from TEAM;
select * from PLAYER inner join TEAM on PLAYER.team = TEAM.name;

--truncate table PLATER; DANGEROUS, delete * but it ALSO COMMITS IMMEDIATELY;

commit;
rollback;
delete from PLYAYER;
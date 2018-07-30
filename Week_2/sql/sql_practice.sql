--SQL Practice'

--1. Select all records from Employee where FIRST NAME is Andrew and REPORTTSTO is null

select * from EMPLOYEE where FIRSTNAME = 'Andrew' and REPORTSTO is NULL;

--2. Select all albums in Album table and sort result set in descending order by title.

select * from ALBUM order by TITLE desc;

--3. Update Aaron Mitchell in Customer table to Robert Walter 

update CUSTOMER set FIRSTNAME = 'Robert', LASTNAME = 'Walter' where FIRSTNAME = 'Aaron' and LASTNAME = 'Mitchell';

--4. Select all employees hired between 1st of June 2003 and 1st of March 2004

select * from EMPLOYEE where HIREDATE between '01-JUN-03' and '01-MAR-04';

--5. Delete a record in Customer table where the name is Robert Walter 
--(There may be constraints that rely on this, find out how to resolve them).


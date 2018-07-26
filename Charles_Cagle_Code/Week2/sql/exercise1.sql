-- 1. Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
select * from Employee where firstname = 'Andrew' and reportsto is null;

-- 2. Select all albums in Album table and sort result set in descending order by title.
select title from album order by title desc;

-- 3. Update Aaron Mitchell in Customer table to Robert Walter 
update Customer set firstname = 'Robert', lastname = 'Walter' where firstname = 'Aaron' and lastname = 'Mitchell';

-- 4. Select all employees hired between 1st of June 2003 and 1st of March 2004
select employeeid, firstname, lastname from Employee where hiredate between date '2003-06-01' and date '2004-03-01';

-- 5. Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them). 
delete from InvoiceLine where InvoiceId in (select invoiceid from invoice natural join customer where firstname = 'Robert' and lastname = 'Walter');
delete from Invoice where customerid = (select customerid from customer where firstname = 'Robert' and lastname = 'Walter');
delete from Customer where firstname = 'Robert' and lastname = 'Walter';

-- 6. Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId. 
select firstname, lastname, invoiceid from customer natural inner join invoice;

-- 7. Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total. 
select customerid, firstname, lastname, invoiceid, total from customer natural left outer join invoice;

-- 8. Create a right join that joins album and artist specifying artist name and title.
select name, title from album natural right outer join artist;

-- 9. Create a cross join that joins album and artist and sorts by artist name in ascending order.
select title, name from album cross join artist order by name asc;

-- 10. Perform a self-join on the employee table, joining on the reportsto column.select * from Employee where firstname = 'Andrew' and reportsto is null;
select emp.firstname, emp.lastname, emp2.firstname, emp2.lastname from employee emp join employee emp2 on emp.reportsto = emp2.employeeid;

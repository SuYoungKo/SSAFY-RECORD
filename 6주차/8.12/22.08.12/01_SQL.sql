select * From City where ID < 50;

select ID , sum(Population) AS "합계" FROM city
GROUP BY CountryCode order by ID;
-- CountryCode로 묶는다. GROUP BY가 나오면 SUM,AVE... 함께 사용된다. 
-- ID를 기준으로 오름차순 정렬

select CountryCode , count(Population) AS "도시수" FROM city
GROUP BY CountryCode order by count(Population);
-- 나라별 도시수 찾고 도시수 기준으로 오름정렬

-- having GROUP BY에서만 사용할 수있는 조건절
-- LIMIT 특정 개수만 보여줌

-- 도전 SELECT 연습 (TOP 5개의 국가 코드, 인구수 출력)
select CountryCode , sum(Population) AS "인구수" FROM city
GROUP BY CountryCode 
order by sum(Population)
DESC LIMIT 5;

-- employees 데이터 (날짜 다루기)
select * from dept_emp LIMIT 100;
select day(from_date) from dept_emp limit 10;

-- 날짜 간격구하기 timestampdiff
-- 날짜 더하기 date_add( ) 함수 사용
-- 날짜 빼기 date_sub( ) 함수 사용

-- join (중요)
select employees.first_name, employees.last_name, departments.dept_name
from employees
left join dept_emp
ON employees.emp_no= dept_emp.emp_no
left join departments
ON dept_emp.dept_no = departments.dept_no
LIMIT 100;







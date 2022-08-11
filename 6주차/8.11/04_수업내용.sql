select * from city;
-- BETWEEN A AND B : A와 B 사이의값
select * from city where Population between 500 and 900;

-- in (후보 item1, 후보 item2 ...)
-- 지정된 컬럼의 값이 특정 값에 해당되는 조건을 만들때 활용 or 
-- or의 역할
select * from city where Name in ('Seoul','Sydney','Oxford');
-- in 조건을 제외
select * from city where Name not in ('Seoul','Sydney','Oxford');

-- LIKE
-- WHERE 절 다음에 활용
-- 문자열 검색 NAME=Seoul

-- % : 다중 문자를 의미 (와일드카드) New로 시작하는 모든 문자열을 가져온다
select * from city where Name LIKE 'New%';
-- New가 들어가는 모든 city를 가져온다
select * from city where Name LIKE '%New%';

-- 한가지 문자만 가져올때 _ 활용
-- CountryCode가 K_R -> K와 R사이에 한글자는 아무거나 들어가도 된다
select * from city where CountryCode LIKE 'K_R';

-- =============================================================--
-- 1) 인구수가 1000명 미만이면서 A로 시작하는 도시 찾기
select * from city where Population <1000 and NAME LIKE 'A%';
-- 2) 일본에서 인구수가 100 ~ 200 인 도시를 찾아 도시 이름과 국가코드 필드만 출력하기
select Name, CountryCode from city 
where Population between 1000000 and 2000000
and CountryCode = 'jpn';
-- 3)
select * from city where NAME LIKE '%kim%';

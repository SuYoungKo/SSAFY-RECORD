-- SELECT * FROM minco.honey;
-- SELECT * FROM minco.honey WHERE num = 1; num이 1인것만 가져오기
-- 1개의 SQL 문을 실행
-- CTRL + Enter 

-- 여러개(다중)SQL문을 실행  
-- CTRL + SHIFT + ENTER (실행하고자 하는 영역을 드래그, 드래그 안하면 모든 SQL실행)honeyhoneyhoney 

-- as "별칭이름"
-- select name as "이름",age "나이"  from minco.honey;

-- 정렬하기
-- 정렬할 경우에는 order by를 붙인다
-- 오름차순 - 기본값 ASC

-- 나이 오름차순
-- select * from honey order by age asc;

-- 나이 내림차순
-- select * from honey order by age desc;

-- limit(데이터의 제한)honey
-- select * from honey limit 2;

-- offset 시작행을 설정
-- select * from honey limit 2 offset 4;

-- 도전 조건대로 출력하기
-- 1)  
select num as "번호", name "번호", age "나이"  from minco.honey order by age asc;
-- 2)
select age,name from minco.honey order by name asc;
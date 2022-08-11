honeyhoneySELECT * FROM honey;

-- insert into 테이블 valuse('값','값'...)
insert into honey values(2,'영호','28');
insert into honey values(3,'가현','30');
insert into honey values(7,'이순신','20');
insert into honey values(8,'박중박','50');

-- UPDATE 테이블 SET 필드 = 값 WHERE 레코드 조건
-- 이순신의 나이를 320으로 바꾼다
-- update honey set age = '320' WHERE name = '이순신';
-- name = '이순신'은 중복되는게 있을수도 있기때문에 안됨 (세이프 모드)
update honey set age = '320' WHERE num = 7;
-- num pk -> 유일무이 중복이 안되는 존재(단 한개만 존재함)
-- 박중박의 이름을 박재훈으로 바꾼다.
update honey set name = '박재훈' WHERE num = 8;

-- delete from 테이블 where 조건
-- 7번 레코드 삭제
delete from honey where num = 7;
-- 8번 레코드 삭제
delete from honey where num = 8;


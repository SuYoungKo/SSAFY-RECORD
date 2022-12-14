#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
#include <string>
#include <stack>
#include <cstring>

struct Point {
	int x;
	int y;
	int d;
};

using namespace std;
int arr[110][110] = { 0 };
int used[110][110] = { 0 };

int dx[8] = { -3,-2,-3,-2,2,3,2,3 };
int dy[8] = { -2,-3,2,3,3,2,-3,-2 };
int ret = -1;

queue<Point>q;
int main()
{
	int H, W;
	cin >> H >> W;

	int R, C;
	cin >> R >> C;

	Point start = { R,C,0 };

	int X, Y;
	cin >> X >> Y;

	//파란색
	arr[X][Y] = 2;

	int N;
	cin >> N;

	//붉은 쫄
	for (int i = 0; i < N; i++)
	{
		int x, y;
		cin >> x >> y;
		arr[x][y] = 1;
	}

	q.push(start);
	used[R][C] = 1;

	while (!q.empty())
	{
		Point now = q.front();
		q.pop();

		if (arr[now.x][now.y] == 2)
		{
			ret = now.d;
			break;
		}


		for (int i = 0; i < 8; i++)
		{
			int nx = now.x + dx[i];
			int ny = now.y + dy[i];

			if (nx < 0 || ny < 0 || nx >= H || ny >= W)continue;
			if (used[nx][ny] == 1)continue;
			if (arr[nx][ny] == 1)continue;
			used[nx][ny] = 1;
			q.push({ nx,ny,now.d + 1 });
		}



	}

	if (ret != -1) cout << ret;
	else cout << -1;




}


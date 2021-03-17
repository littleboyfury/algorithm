package data_structure.graph;

/**
 * 深度优先搜索
 * 0 0 1 0
 * 0 0 0 0
 * 0 0 1 0
 * 0 1 0 0
 * 0 0 0 1
 * 从[0][0]开始
 */
public class DFS {
    /**
     * 地图的行
     */
    int n;
    /**
     * 地图的列
     */
    int m;
    /**
     * 需要找的x坐标
     */
    int dx;
    /**
     * 需要找的y坐标
     */
    int dy;
    /**
     * 地图标记
     */
    int[][] data;
    /**
     * 路径标记
     */
    boolean[][] mark;
    /**
     * 最短的路径
     */
    boolean[][] steps;
    /**
     * 四个方向
     */
    int[][] next = {{0, -1}, {1, 0}, {0, 1}, {-1, 0}};
    /**
     * 最短的路径
     */
    int minStep = Integer.MAX_VALUE;

    public DFS(int n, int m, int dx, int dy, int[][] data) {
        this.n = n;
        this.m = m;
        this.dx = dx;
        this.dy = dy;
        this.data = data;
        mark = new boolean[n][m];
        steps = new boolean[n][m];
    }

    public static void main(String[] args) {
        int[][] data = {{0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 0, 1}};
        //需要查找的x坐标
        int dx = 3;
        //需要查找的y坐标
        int dy = 2;
        //起点x坐标
        int startX = 0;
        //起点y坐标
        int startY = 0;
        DFS dfs = new DFS(data.length, data[0].length, dx, dy, data);
        //起点标记为true
        dfs.mark[startX][startY] = true;
        dfs.dfs(startX, startY, 0);
        if(dfs.minStep == Integer.MAX_VALUE) {
            System.out.println("找不到");
            return;
        }
        //最小步数
        System.out.println(dfs.minStep);
        //输出路径
        dfs.printStep(dfs.steps, startX, startY);
    }

    /**
     * dfs算法
     *
     * @param x    起点x
     * @param y    起点y
     * @param step 步数
     */
    public void dfs(int x, int y, int step) {
        //结束条件
        if (x == dx && y == dy) {
            //如果找到了，而且步数小于之前的最小步数
            if (minStep > step) {
                //更新步数
                minStep = step;
                //更新路径
                for (int i = 0; i < mark.length; i++) {
                    for (int j = 0; j < mark[0].length; j++) {
                        steps[i][j] = mark[i][j];
                    }
                }
            }
            return;
        }
        //查找四个方向
        for (int i = 0; i < next.length; i++) {
            //下一个点
            int nextX = x + next[i][0];
            int nextY = y + next[i][1];
            //超出边界
            if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
                continue;
            }
            //下一个点可以走
            if (data[nextX][nextY] == 0 && !mark[nextX][nextY]) {
                mark[nextX][nextY] = true;
                dfs(nextX, nextY, step + 1);
                mark[nextX][nextY] = false;
            }
        }
    }

    /**
     * 打印路径
     *
     * @param steps  路径标记
     * @param startX 开始x
     * @param startY 开始y
     */
    public void printStep(boolean[][] steps, int startX, int startY) {
        int x = startX;
        int y = startY;
        //判断是否到达了终点
        while (x != dx || y != dy) {
            //输出路径坐标
            System.out.println("x:" + x + " y:" + y);
            //输出过的标记为false
            steps[x][y] = false;
            //按照四个方向的搜索顺序进行搜索
            for (int i = 0; i < next.length; i++) {
                int nx = x + next[i][0];
                int ny = y + next[i][1];
                if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
                    continue;
                }
                //如果有true的，表示可以向下走
                if (steps[nx][ny]) {
                    x = nx;
                    y = ny;
                    break;
                }
            }
        }
        //输出终点
        System.out.println("x:" + x + " y:" + y);
    }
}

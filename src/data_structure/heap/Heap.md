# 堆树

## 1. 堆

### 1）什么是堆树

* 是一棵完全二叉树
* 每一个节点的值都大于等于或者小于等于其左右子节点的值

二叉搜索树：左节点小于根节点，右节点大于根节点

完全二叉树：除了最后一层，其他层每个节点都是满的，而且最后一层的节点都要靠左排列。加入是一个满的二叉树，32层就可以有21亿+个点，n个数交换logn - 1次。复杂度仅次于o(n)

* 大顶堆，大的数在上面，小的在下，根节点一定为最大的数

<img src="https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162856760.png" alt="image-20210317162856760" style="zoom:50%;" />

* 小顶堆，小的数在最上面，大的在项目，根节点一定为最小的数

<img src="https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162909473.png" alt="image-20210317162909473" style="zoom:50%;" />

根据堆树的特点，优先队列内部就可以用堆树实现。

### 2）堆树的储存结构

完全二叉树的最佳储存结构是数组，因为它有特殊的属性，可以直接利用下标来表示左右的节点

比如下边的结构：

数组：10 8 7 6 5 3

index：0 1 2 3 4 5

左右孩子可以表示为2*i+1, 2*(i+1)

<img src="https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162921242.png" alt="image-20210317162921242" style="zoom:50%;" />

### 3）堆的插入操作

堆的插入有两种实现方式：

（1）从下往上

（2）从上往下

插入的过程就叫做堆化

* 以大根堆为例

从下往上：假如在上图中插入9，这时就不满足大根堆的性质，所以要进行上下交换，依次往上，直到不能交换为止。

![image-20210317162932803](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162932803.png)

  从上往下：就是把插入的点放到堆顶，然后依次往下比较即可，即把这个数先和根节点比较。

### 4）堆的删除操作

将堆顶的元素和堆最后一个元素交换，然后删除该元素，然后从堆顶向下重新堆化

* 第一步：交换首位的值

<img src="https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162944680.png" alt="image-20210317162944680" style="zoom:50%;" />

* 第二步，删除最后一个

![image-20210317162955965](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317162955965.png)

![image-20210317163006008](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163006008.png)

* 第三步：向下堆化，根节点和左右节点最大的一个交换，然后继续向下，直到不能交换为止，这里交换20和3

![image-20210317163017119](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163017119.png)

这里交换8和3

![image-20210317163028298](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163028298.png)

删除完成

### 5）堆排序

1. 先将这一串数字放入数组中，构成一棵完全二叉树
2. 从最后一个非叶子节点开始堆化，这里建立的大根堆，最后输出数组为由小到大排序
3. 依次取出堆顶元素和最后一个没有排好序的元素交换，然后重新堆化没有排序的序列

假设给你一个序列：

8 4 20 7 3 1 25 14 17

![image-20210317163038085](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163038085.png)

数组结构，需要从最后一个非叶子节点开始（数组长度/2 - 1），向前堆化。（为什么要从最后一个非叶子节点：因为叶子节点向下就是一个独一节点，也可以认为是一个好的堆树，所以不需要判断）

#### 先堆化

* 第一步：找到最后一个非叶子节点，7就是最后一个非叶子节点，向下比较，找出子节点最大的一个节点，然后交换值，然后一直到不能交换为止，一次堆化完成。然后向前继续堆化。

![image-20210317163047178](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163047178.png)

* 第二步：下一个节点为20，找到最大的子节点，交换值

![image-20210317163056497](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163056497.png)

* 第三步：继续找下一个节点，即为4，与子节点交换值，发现4节点下面的子树不满足堆树，所以继续向下交换

![image-20210317163104869](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163104869.png)

* 第四步：继续交换

![image-20210317163113962](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163113962.png)

* 第五步：继续向前堆化，即为8的节点，和子节点最大的交换，交换后，8节点的子树也不 满足堆树，所以继续调整

![image-20210317163122843](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163122843.png)

* 第六步：交换8和20，堆化完成

![image-20210317163132380](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163132380.png)

现在就是一个大根堆

#### 在排序

排序有两种方式

第一种：从无到有，就是开辟一个新的数组，从头添加

第二张：在原数组的基础上，从后往前排序。

选取第二种方式：

* 第一步：交换首尾的值，从堆顶向下堆化，但是不能包含已经排序好的序列。

![image-20210317163143406](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163143406.png)

![image-20210317163151345](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163151345.png)

![image-20210317163159560](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163159560.png)

第一次排序完成

* 第二步，继续将堆顶元素和没有排序的最后一个元素交换，然后重新堆化

![image-20210317163208021](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163208021.png)

![image-20210317163216515](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163216515.png)

![image-20210317163224779](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163224779.png)

第二次完成，这样以此类推，就可以从小到大排序好了。

![image-20210317163232903](https://cycling-bucket.oss-cn-shenzhen.aliyuncs.com/littleboy/image-20210317163232903.png)

### 6）堆的应用

1. 优先级队列

   将这串数字堆化，优先级高的就会到堆顶，然后取出堆顶的元素，重新堆化，就相当于堆的删除操作。

2. TOP K问题，给你1亿个数字，求解出前K个最大的数，一种是静态的数据，还有就是动态的数据。

   将这一堆数字分成多个文件，求解每个文件的top K，然后在求解每个文件的top K合并后的数组的top K，这样可以节省内存空间。

3. 定时任务

### 7）示例代码

[堆树代码](./HeapSort.java)


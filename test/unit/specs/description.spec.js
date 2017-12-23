import Vue from 'vue'
import description from '@/components/description'

function getRenderedVm (Component,propsData){
    const ctor=Vue.extend(Component);
    const vm=new ctor({propsData}).$mount();
    return vm;
}
describe('description.vue',()=>{
    it('has a mounted hook',()=>{
        expect(typeof description.mounted).to.be.equal('function')
    });
    it('data() is a function',()=>{
        expect(typeof description.data).to.be.equal('function')
    });
    it('total_comments changed when finding a new book',()=>{
        let desvm=getRenderedVm(description,
            {
                itemDetail: {
                    "id": 10000,
                    "isUsedbooks": 0,
                    "name": "Algorithms",
                    "price": 31.60,
                    "freight": 5,
                    "sales_volume": 50,
                    "author": "Sanjoy Dasgupta,‎ Christos Papadimitriou,‎ Umesh Vazirani,‎ 王沛 (译者),‎ 唐扬斌 (译者),‎ 刘齐军 (译者)",
                    "seller": 1,
                    "tags": [2],
                    "url": "http://item.jd.com/10079570.html",
                    "picture": "http://img10.360buyimg.com/n1/jfs/t3910/74/286809770/130084/6c02e960/584778f9N4cb292f8.jpg",
                    "detail": {
                        "publisher": "清华大学出版社",
                        "pub_date": "2008-07-01",
                        "pages": 345,
                        "language": "中文"
                    },
                    "information": {
                        "introduction": "作为一本介绍算法技术和思想的书籍，本书不仅是面各信息学科大学生的优秀教材（或参考书），更是将任何具有初等数学基础的人引入算法应用与研究殿堂的一块引路石。本书循序渐进、深入浅出地展示了算法研究与应用领域中，从模型分析、算法构造到复杂性分析和算法优化的方方面面。涉及内容从古老的算术算法、排序算法、简单算法、线性规划、动态规划、随机算法以及NP复杂理论，甚至是尚未完全显现全貌的量子计算，覆盖了经典、现代和未来算法发展的众多代表性成果。　　《国外经典教材·计算机科学与技术：算法概论》选材新颖，内容丰富，适用于作为计算机学科以及相关学科算法课程的教材和参考书，同时也可作从事算法研究的入门书籍。",
                        "content": "第0章 序言\n0.1 书籍和算法\n0.2 从Fibonacci数列开始\n0.3 大O符号\n习题"
                    },
                    "scores": {
                        "credit": 4.5,
                        "good": 4.7
                    },
                    "comments": [{
                        "user": "Jay",
                        "comment": "Very good!!!"
                    },
                        {
                            "user": "LIUok",
                            "comment": "cheap and good use."
                        }
                    ]
                }
    });
        expect(desvm.itemDetail.comments.length).to.be.equal(2)
    })
});

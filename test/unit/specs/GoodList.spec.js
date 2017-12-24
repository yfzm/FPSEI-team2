import Vue from 'vue';
import GoodList from '@/components/GoodList.vue';
import iView from 'iview';
Vue.use(iView);

describe('Vue对象测试', () => {
    it('存在mounted钩子', () => {
        expect(typeof GoodList.mounted).to.be.equal('function');
    });

    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor().$mount();

    it('存在send_Item函数', () => {
        expect(typeof goodList.send_Item).to.be.equal('function');
    });
    it('存在get_arr函数', () => {
        expect(typeof goodList.get_arr).to.be.equal('function');
    });
    it('存在filter_goods函数', () => {
        expect(typeof goodList.filter_goods).to.be.equal('function');
    });
    it('存在operate_goods函数', () => {
        expect(typeof goodList.operate_goods).to.be.equal('function');
    });
    it('存在select_data函数', () => {
        expect(typeof goodList.select_data).to.be.equal('function');
    });
    it('存在choose_page函数', () => {
        expect(typeof goodList.choose_page).to.be.equal('function');
    });

});

describe('传入空数据测试', () => {
    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: []
        }
    }).$mount();

    it('mounted钩子功能测试', () => {
        expect(goodList.goods.length).to.be.equal(0);
        expect(goodList.total_goods).to.be.equal(0);
        expect(goodList.showing_goods.length).to.be.equal(0);
    });

    it('DOM显示正确性测试', done => {
        expect(goodList.$el.querySelector('#no-result-info p').innerText).to.be.equal('无搜索结果');
        expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共0条记录');

        // 切换筛选器到“不显示二手书”
        goodList.selector_option = '1';
        goodList.select_data('1');
        Vue.nextTick(() => {
            expect(goodList.$el.querySelector('#no-result-info p').innerText).to.be.equal('无搜索结果');
            expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共0条记录');

            // 切换筛选器到“仅显示二手书”
            goodList.selector_option = '2';
            goodList.select_data('2');
            Vue.nextTick(() => {
                expect(goodList.$el.querySelector('#no-result-info p').innerText).to.be.equal('无符合条件的二手书');
                expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共0条记录');
                done();
            });
        });


    })
});

describe('传入一项数据测试', () => {

    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: [10000]
        }
    }).$mount();

    it('mounted钩子功能测试', () => {
        expect(goodList.goods.length).to.be.equal(1);
        expect(goodList.total_goods).to.be.equal(1);
        expect(goodList.showing_goods.length).to.be.equal(1);
    });

    it('DOM显示正确性测试', done => {
        expect(goodList.$el.querySelector('#no-result-info p')).to.be.equal(null);
        expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共1条记录');

        // 切换筛选器到“不显示二手书”
        goodList.selector_option = '1';
        goodList.select_data('1');
        Vue.nextTick(() => {
            expect(goodList.$el.querySelector('#no-result-info p')).to.be.equal(null);
            expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共1条记录');

            // 切换筛选器到“仅显示二手书”
            goodList.selector_option = '2';
            goodList.select_data('2');
            Vue.nextTick(() => {
                expect(goodList.goods.length).to.be.equal(0);
                expect(goodList.$el.querySelector('#no-result-info p').innerText).to.be.equal('无符合条件的二手书');
                expect(goodList.$el.querySelector('.record-text').innerText).to.be.equal('共0条记录');
                done();
            });
        });



    })
});

describe('卡片显示测试', () => {
    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: [10000]
        }
    }).$mount();

    it("不显示二手书标识", () => {
        expect(goodList.$el.querySelector('.good-used-tag')).to.be.equal(null);
    });

    it("书名", () => {
        expect(goodList.$el.querySelector('.good-name').innerText.trim()).to.be.equal("Algorithms");
    });

    it("价格", () => {
        expect(goodList.$el.querySelector('.price').innerText.trim()).to.be.equal("￥31.60");
    });

    it("运费", () => {
        expect(goodList.$el.querySelector('.keys .freight').innerText.trim()).to.be.equal("￥5.00");
    });

    it("销量", () => {
        expect(goodList.$el.querySelector('.keys .volume').innerText.trim()).to.be.equal("50");
    });

    it("来源", () => {
        expect(goodList.$el.querySelector('.good-seller span').innerText.trim()).to.be.equal("京东");
    });

    it("标签个数", () => {
        expect(goodList.$el.querySelectorAll('.tag').length).to.be.equal(1);
    });

    it("标签内容", () => {
        expect(goodList.$el.querySelectorAll('.tag')[0].innerText.trim()).to.be.equal("七天退换");
    });


});

describe('排序算法测试', () => {
    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: [10002, 10001]
        }
    }).$mount();

    it('按价格排序，无运费', done => {
        goodList.goods = goodList.get_arr([10002, 10003]);
        Vue.nextTick(() => {
            expect(goodList.goods[0].id).to.be.equal(10002);
            expect(goodList.goods[1].id).to.be.equal(10003);

            goodList.sort_goods();
            Vue.nextTick(() => {
                expect(goodList.goods[0].id).to.be.equal(10003);
                expect(goodList.goods[1].id).to.be.equal(10002);
                done();
            });
        });
    });

    it('按价格排序，有运费', done => {
        goodList.goods = goodList.get_arr([10000, 10001]);
        Vue.nextTick(() => {
            expect(goodList.goods[0].id).to.be.equal(10000);
            expect(goodList.goods[1].id).to.be.equal(10001);

            goodList.sort_goods();
            Vue.nextTick(() => {
                expect(goodList.goods[0].id).to.be.equal(10001);
                expect(goodList.goods[1].id).to.be.equal(10000);
                done();
            });
        });
    });

    it('价格相同时，按销量排序', done => {
        goodList.goods = goodList.get_arr([10013, 10016]);
        Vue.nextTick(() => {
            expect(goodList.goods[0].id).to.be.equal(10013);
            expect(goodList.goods[1].id).to.be.equal(10016);

            goodList.sort_goods();
            Vue.nextTick(() => {
                expect(goodList.goods[0].id).to.be.equal(10016);
                expect(goodList.goods[1].id).to.be.equal(10013);
                done();
            });
        });
    });

    it('价格、销量相同时，按评分排序', done => {
        goodList.goods = goodList.get_arr([10030, 10031]);
        Vue.nextTick(() => {
            expect(goodList.goods[0].id).to.be.equal(10030);
            expect(goodList.goods[1].id).to.be.equal(10031);

            goodList.sort_goods();
            Vue.nextTick(() => {
                expect(goodList.goods[0].id).to.be.equal(10031);
                expect(goodList.goods[1].id).to.be.equal(10030);
                done();
            });
        });
    });

    it('综合排序', done => {
        goodList.goods = goodList.get_arr([10000, 10001, 10002, 10003, 10004, 10005]);
        Vue.nextTick(() => {
            expect(goodList.goods[0].id).to.be.equal(10000);
            expect(goodList.goods[1].id).to.be.equal(10001);
            expect(goodList.goods[2].id).to.be.equal(10002);
            expect(goodList.goods[3].id).to.be.equal(10003);
            expect(goodList.goods[4].id).to.be.equal(10004);
            expect(goodList.goods[5].id).to.be.equal(10005);

            goodList.sort_goods();
            Vue.nextTick(() => {
                expect(goodList.goods[0].id).to.be.equal(10001);
                expect(goodList.goods[1].id).to.be.equal(10000);
                expect(goodList.goods[2].id).to.be.equal(10004);
                expect(goodList.goods[3].id).to.be.equal(10003);
                expect(goodList.goods[4].id).to.be.equal(10002);
                expect(goodList.goods[5].id).to.be.equal(10005);
                done();
            });
        });
    });

});

describe('分页测试1，无分页', () => {
    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: [10000, 10001, 10002, 10003, 10004, 10005]
        }
    }).$mount();

    it('只有六个元素，无分页', () => {
        expect(goodList.$el.querySelector('.good-page-switch')).to.be.equal(null);
    });
});

describe('分页测试2，有分页', () => {
    const Constructor = Vue.extend(GoodList);
    const goodList = new Constructor({
        propsData: {
            searchArr: [10000, 10001, 10002, 10003, 10004, 10005, 10006]
        }
    }).$mount();

    it('七个元素，有分页', () => {
        let page_text = goodList.$el.querySelector('.good-page-switch').innerText.trim();
        expect(page_text.charAt(page_text.length - 1)).to.be.equal('2');
    });
});

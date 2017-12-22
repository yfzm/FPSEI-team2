import Vue from 'vue';
import GoodList from '@/components/GoodList.vue';

describe('Vue对象测试', () => {
    it('存在mounted钩子', () => {
        expect(typeof GoodList.mounted).to.be.equal('function');
    })
})

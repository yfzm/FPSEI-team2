import Vue from 'vue'
import footer from '@/components/footer'

describe('footer.vue',() =>{
    it('data() is a function',()=>{
        expect(typeof footer.data).to.be.equal('function')
    });
    it('git1 is a function',()=>{
        const Constructor= Vue.extend(footer);
        const vm=new Constructor().$mount();
        expect(typeof vm.git1).to.be.equal('function');
    });
    it('git2 is a function',()=>{
        const Constructor= Vue.extend(footer);
        const vm=new Constructor().$mount();
        expect(typeof vm.git2).to.be.equal('function');
    });
    it('git3 is a function',()=>{
        const Constructor= Vue.extend(footer);
        const vm=new Constructor().$mount();
        expect(typeof vm.git3).to.be.equal('function');
    });
    it('iview_show is a function',()=>{
        const Constructor= Vue.extend(footer);
        const vm=new Constructor().$mount();
        expect(typeof vm.iview_show).to.be.equal('function');
    });
});

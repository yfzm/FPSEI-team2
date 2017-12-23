import Vue from 'vue'
import footer from '@/components/footer'

describe('footer.vue',() =>{
    it('data() is a function',()=>{
        expect(typeof footer.data).to.be.equal('function')
    })
});

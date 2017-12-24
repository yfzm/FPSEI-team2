import Vue from 'vue'
import Search from '@/components/Search'
import iView from 'iview'
Vue.use(iView);

describe('Search.vue',() =>{
  it('data is a function',()=>{
      expect(typeof Search.data).to.be.equal('function')
  });

  it('showNextpage is a function',()=>{
      const Constructor= Vue.extend(Search);
      const vm=new Constructor().$mount();
      expect(typeof vm.showNextpage).to.be.equal('function');
  });
  //检查input_result
  it('input_result would change after clicking',() =>{
    const Constructor= Vue.extend(Search);
    const vm=new Constructor().$mount();
    vm.my_input="Algorithms";
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);

    vm._watcher.run();

    expect(vm.input_result).to.be.equal("Algorithms")
  });
  //检查输入框是否为空
    it('when input is "" ',() =>{
        const Constructor= Vue.extend(Search);
        const vm=new Constructor().$mount();
        vm.my_input="";
        const button=vm.$el.querySelector('button');
        const clickEvent=new window.Event('click');
        button.dispatchEvent(clickEvent);

        vm._watcher.run();

        expect(vm.input_result).to.be.equal(null);
    });
    //检查输出的所有id是否正确
  it('search_result add id after clicking',() =>{
    const Constructor=Vue.extend(Search);
    const vm=new Constructor().$mount();
    vm.my_input="Algorithms";
    const button=vm.$el.querySelector('button');
    const clickEvent=new window.Event('click');
    button.dispatchEvent(clickEvent);

    vm._watcher.run();

    expect(vm.search_result).to.contain(10000);
    expect(vm.search_result).to.contain(10001)
  })
});

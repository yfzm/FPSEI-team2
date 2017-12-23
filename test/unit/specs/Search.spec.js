import Vue from 'vue'
import Search from '@/components/Search'

describe('Search.vue',() =>{
  it('data is a function',()=>{
      expect(typeof Search.data).to.be.equal('function')
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

import TWEEN from '@tweenjs/tween.js'

export default{
  install:function(Vue){
    Vue.prototype.$tween = this;
    Vue.prototype.$tweener = TWEEN;
  },
  pause:function(tw){
    tw.pause();
  },
  fade:function(target,to,during,delay,easing,onUpdate,onComplete){
    if(!target || !to){
      return;
    }
    if(during==null){
      during = 260;
    }
    let tw = new TWEEN.Tween(target).to(to,during);
    if(delay) tw.delay(delay);
    tw.easing(easing || TWEEN.Easing.Linear.None)
    if(onUpdate) tw.onUpdate(onUpdate);
    if(onComplete) tw.onComplete(onComplete);
    tw.start();
    return tw;
  },
}
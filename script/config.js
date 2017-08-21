/**
 * Created by Administrator on 2017/8/15.
 */
require.config({
  baseUrl: '/script',
  paths: {
    'jquery': 'jquery/jquery',
    'cookie': 'jquery-cookie/jquery.cookie',
    'bootstrap': 'bootstrap/js/bootstrap.min',
    'template': 'artTemplate/template',
    'nprogress': 'nprogress/nprogress',
    'form': 'jquery-form/jquery.form',
    'uploadify': 'uploadify/jquery.uploadify',
    'region': 'jquery-region/jquery.region',
    'ckeditor': 'ckeditor/ckeditor',
    'utils': '/utils',
    'Jcrop': 'Jcrop/js/Jcrop',
    'brand': 'brand'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    uploadify: {
      deps: ['jquery']
    },
    ckeditor: {
      exports: 'CKEDITOR'
    },
    Jcrop:{
      deps:['jquery']
    }
  }
});

(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FQ1g:function(t,i,n){"use strict";n.r(i),n.d(i,"AboutModule",(function(){return j}));var e=n("3Pt+"),o=n("ofXK"),s=n("bhfF"),c=n("tyNb"),l=n("PCNd"),b=n("AytR"),r=n("fXoL"),a=n("jhN1"),u=n("BLnj"),p=n("pYqb"),d=n("ILZG");const g=["subscriptionForm"];function m(t,i){1&t&&(r.Rb(0,"p",15),r.Hc(1,"E-mail is required."),r.Qb())}function f(t,i){1&t&&(r.Rb(0,"p",15),r.Hc(1,"Please enter a valid e-mail."),r.Qb())}function h(t,i){if(1&t&&(r.Pb(0),r.Fc(1,m,2,0,"p",13),r.Fc(2,f,2,0,"p",13),r.Ob()),2&t){r.fc();const t=r.vc(9);r.zb(1),r.lc("ngIf",null==t.errors?null:t.errors.required),r.zb(1),r.lc("ngIf",null==t.errors?null:t.errors.email)}}function v(t,i){1&t&&(r.Rb(0,"p",15),r.Nb(1,"i",16),r.Hc(2," Something went wrong. Please try again. "),r.Qb())}function R(t,i){1&t&&(r.Rb(0,"p",17),r.Nb(1,"i",18),r.Hc(2," Thank you for subscribing. "),r.Qb())}const Q=function(t){return{cursor:t}},k=function(t,i){return{"far fa-paper-plane":t,"fas fa-circle-notch fa-spin":i}};let S=(()=>{class t{constructor(t){this.messageService=t,this.isSubmitted=!1,this.isSending=!1,this.isSuccess=!1,this.isFailed=!1}onSubmit(){this.isSuccess=!1,this.isFailed=!1,this.subscriptionForm.invalid||(this.isSubmitted=!0,this.isSending=!0,this.serviceSubscription=this.messageService.createSubscription(this.subscriptionForm.value).subscribe(t=>{this.isSuccess=!0,this.isSending=!1,this.subscriptionForm.reset()},t=>{this.isFailed=!0,this.isSending=!1}))}resetForm(){this.isSubmitted=!1,this.isSuccess=!1,this.isFailed=!1}ngOnDestroy(){var t;null===(t=this.serviceSubscription)||void 0===t||t.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(r.Mb(d.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-subscription"]],viewQuery:function(t,i){var n;1&t&&r.Lc(g,!0),2&t&&r.uc(n=r.ec())&&(i.subscriptionForm=n.first)},decls:17,vars:10,consts:[[1,"subscription-block","mt-3"],[1,"text-center"],[1,"text-center","subtitle","text-muted"],[3,"ngSubmit"],["subscriptionForm","ngForm"],[1,"input-group","mb-0"],["placeholder","Your email","name","email","autocomplete","off","required","","email","","ngModel","",1,"form-control",3,"keyup","keyup.enter"],["emailInput","ngModel"],[1,"input-group-append"],["type","submit",1,"btn","btn-primary","btn-outline",3,"ngStyle"],[3,"ngClass"],[1,"info-block"],[4,"ngIf"],["class","text-danger text-center",4,"ngIf"],["class","text-primary text-center",4,"ngIf"],[1,"text-danger","text-center"],[1,"fas","fa-exclamation-circle"],[1,"text-primary","text-center"],[1,"fas","fa-check-circle"]],template:function(t,i){if(1&t&&(r.Rb(0,"div",0),r.Rb(1,"h2",1),r.Hc(2,"Subscribe Now"),r.Qb(),r.Rb(3,"p",2),r.Hc(4,"Be the first to receive my latest posts & offers."),r.Qb(),r.Rb(5,"form",3,4),r.dc("ngSubmit",(function(){return i.onSubmit()})),r.Rb(7,"div",5),r.Rb(8,"input",6,7),r.dc("keyup",(function(){return i.resetForm()}))("keyup.enter",(function(){return i.onSubmit()})),r.Qb(),r.Rb(10,"div",8),r.Rb(11,"button",9),r.Nb(12,"i",10),r.Qb(),r.Qb(),r.Qb(),r.Rb(13,"div",11),r.Fc(14,h,3,2,"ng-container",12),r.Fc(15,v,3,0,"p",13),r.Fc(16,R,3,0,"p",14),r.Qb(),r.Qb(),r.Qb()),2&t){const t=r.vc(6),n=r.vc(9);r.zb(11),r.lc("ngStyle",r.pc(5,Q,i.isSending?"not-allowed":"pointer")),r.zb(1),r.lc("ngClass",r.qc(7,k,!i.isSending,i.isSending)),r.zb(2),r.lc("ngIf",!i.isSubmitted&&n.touched&&t.invalid),r.zb(1),r.lc("ngIf",i.isSubmitted&&i.isFailed),r.zb(1),r.lc("ngIf",i.isSubmitted&&i.isSuccess)}},directives:[e.r,e.j,e.k,e.a,e.o,e.b,e.i,e.l,o.m,o.j,o.l],styles:[".subscription-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;height:100%}.subscription-block[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{padding:8px 0}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{align-self:center;width:75%}.subscription-block[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border-top-left-radius:12px;border-bottom-left-radius:12px;padding:20.5px}.subscription-block[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]:focus{min-width:0}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]{background:transparent;border-left:0;border-top-right-radius:12px;border-bottom-right-radius:12px;border-color:#555;box-shadow:none}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#007ced;font-size:18px}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover{background-color:#007ced;transition:all .3s}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#d5d5d5;transition:all .3s}.info-block[_ngcontent-%COMP%]{min-height:30px}@media(max-width:576px){.subscription-block[_ngcontent-%COMP%]{margin-top:30px!important}.subscription-block[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:90%}}"]}),t})();var C=n("f3yp");function P(t,i){if(1&t&&r.Nb(0,"img",13),2&t){const t=r.fc();r.lc("src",t.testimonial.photo,r.Ac)("alt",t.testimonial.name)}}function O(t,i){if(1&t&&r.Nb(0,"img",14),2&t){const t=r.fc();r.lc("alt",t.testimonial.name)}}let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-testimonial"]],inputs:{testimonial:"testimonial"},decls:17,vars:5,consts:[[1,"testimonial-item"],[1,"testimonial-content"],[1,"testimonial-picture"],[3,"src","alt",4,"ngIf"],["src","assets/img/avatar.jpg",3,"alt",4,"ngIf"],[1,"testimonial-text"],[1,"testimonial-author-info"],[1,"testimonial-author"],[1,"testimonial-firm"],[1,"testimonial-icon"],[1,"fa","fa-quote-left"],[1,"testimonial-icon-big"],[1,"fa","fa-quote-right"],[3,"src","alt"],["src","assets/img/avatar.jpg",3,"alt"]],template:function(t,i){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Fc(3,P,1,2,"img",3),r.Fc(4,O,1,1,"img",4),r.Qb(),r.Rb(5,"div",5),r.Rb(6,"p"),r.Hc(7),r.Qb(),r.Qb(),r.Rb(8,"div",6),r.Rb(9,"h5",7),r.Hc(10),r.Qb(),r.Rb(11,"p",8),r.Hc(12),r.Qb(),r.Qb(),r.Rb(13,"div",9),r.Nb(14,"i",10),r.Qb(),r.Rb(15,"div",11),r.Nb(16,"i",12),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(3),r.lc("ngIf",!!i.testimonial.photo),r.zb(1),r.lc("ngIf",!i.testimonial.photo),r.zb(3),r.Ic(i.testimonial.testimony),r.zb(3),r.Ic(i.testimonial.name),r.zb(2),r.Ic(i.testimonial.title))},directives:[o.l],styles:[""]}),t})();var F=n("4CGa");function w(t,i){1&t&&r.Nb(0,"app-spinner",38),2&t&&r.lc("height",150)}function y(t,i){if(1&t&&r.Nb(0,"app-testimonial",43),2&t){const t=r.fc().$implicit;r.lc("testimonial",t)}}function _(t,i){1&t&&r.Fc(0,y,1,1,"ng-template",42)}function I(t,i){if(1&t&&(r.Rb(0,"div",39),r.Rb(1,"owl-carousel-o",40),r.Fc(2,_,1,0,void 0,41),r.Qb(),r.Qb()),2&t){const t=r.fc(2);r.zb(1),r.lc("options",t.testimonialsCarouselOptions),r.zb(1),r.lc("ngForOf",t.testimonials)}}function x(t,i){if(1&t&&(r.Pb(0),r.Rb(1,"div",18),r.Rb(2,"h2"),r.Hc(3,"Testimonials"),r.Qb(),r.Qb(),r.Fc(4,w,1,1,"app-spinner",36),r.Fc(5,I,3,2,"div",37),r.Ob()),2&t){const t=r.fc();r.zb(4),r.lc("ngIf",t.isFetchingTestimonial),r.zb(1),r.lc("ngIf",!t.isFetchingTestimonial)}}function H(t,i){1&t&&r.Nb(0,"app-spinner",44),2&t&&r.lc("height",250)("widthPercent",80)}function T(t,i){if(1&t&&(r.Rb(0,"div",46),r.Nb(1,"app-skill-bar",47),r.Qb()),2&t){const t=i.$implicit;r.zb(1),r.lc("skill",t)}}function z(t,i){if(1&t&&(r.Pb(0),r.Fc(1,T,2,1,"div",45),r.Ob()),2&t){const t=r.fc();r.zb(1),r.lc("ngForOf",t.featuredSkills)}}function N(t,i){1&t&&(r.Rb(0,"div",48),r.Rb(1,"a",49),r.Hc(2,"See More Skills"),r.Qb(),r.Qb())}const A=[{path:"",component:(()=>{class t{constructor(t,i,n){this.titleService=t,this.resumeService=i,this.portfolioService=n,this.pageTitle=b.a.pageTitle+" - About Me",this.testimonials=[],this.isFetchingTestimonial=!1,this.isFetchingSkills=!1,this.featuredSkills=[]}ngOnInit(){this.titleService.setTitle(this.pageTitle),this.initTestimonialCarousel(),this.fetchTestimonials(),this.fetchFeaturedSkills()}downloadResume(){window.open("https://eyobofficial-portfolio.s3.eu-central-1.amazonaws.com/resume/CV.pdf")}fetchTestimonials(){this.isFetchingTestimonial=!0,this.testimonialSub=this.portfolioService.getTestimonials().subscribe(t=>{this.testimonials=t,this.isFetchingTestimonial=!1})}fetchFeaturedSkills(){this.isFetchingSkills=!0,this.skillSub=this.resumeService.getFeaturedSkills().subscribe(t=>{this.featuredSkills=t,this.isFetchingSkills=!1})}initTestimonialCarousel(){this.testimonialsCarouselOptions={nav:!1,items:3,loop:!1,navText:["",""],margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}}}ngOnDestroy(){this.testimonialSub.unsubscribe(),this.skillSub.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(r.Mb(a.d),r.Mb(u.a),r.Mb(p.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["ng-component"]],decls:90,vars:4,consts:[["id","main",1,"site-main"],["id","main-content",1,"single-page-content"],["id","primary",1,"content-area"],["id","content","role","main",1,"page-content","site-content","single-post"],["id","home_content",1,"home-content","third-style"],[1,"start-page-full-width"],[1,"row"],[1,"col-sm-12","col-md-6","col-lg-6"],[1,"inner-content"],[1,"fill-block"],[1,"inner-content","inner-text-block"],[1,"hp-text-block"],[1,"sp-subtitle"],[1,"hp-main-title"],[1,"hp-buttons"],[1,"btn","btn-primary",3,"click"],[1,"col-xs-12","col-sm-12"],[1,"p-50"],[1,"block-title"],[1,"col-xs-12","col-sm-6"],[1,"info-list-w-icon"],[1,"info-block-w-icon"],[1,"ci-icon"],[1,"fas","fa-laptop-code"],[1,"ci-text"],[1,"linecons","linecons-params"],[1,"fas","fa-server"],[1,"fas","fa-code-branch"],[1,"p-20"],[4,"ngIf"],[1,"p-40"],[1,"col-sm-12","col-md-6","featured-skills-col"],[1,"featured-skills","mt-2"],[3,"height","widthPercent",4,"ngIf"],["class","more-skill-btn",4,"ngIf"],[1,"col-sm-12","col-md-6"],[3,"height",4,"ngIf"],["id","testimonials-slide","class","testimonials owl-carousel",4,"ngIf"],[3,"height"],["id","testimonials-slide",1,"testimonials","owl-carousel"],[3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[3,"testimonial"],[3,"height","widthPercent"],["class","skill-bar-container",4,"ngFor","ngForOf"],[1,"skill-bar-container"],[3,"skill"],[1,"more-skill-btn"],["routerLink","/resume",1,"btn","btn-primary","mt-3"]],template:function(t,i){1&t&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"div",2),r.Rb(3,"div",3),r.Rb(4,"div",4),r.Rb(5,"div",5),r.Rb(6,"div",6),r.Rb(7,"div",7),r.Rb(8,"div",8),r.Nb(9,"div",9),r.Qb(),r.Qb(),r.Rb(10,"div",7),r.Rb(11,"div",10),r.Rb(12,"div",11),r.Rb(13,"div",12),r.Hc(14,"Full-Stack Developer"),r.Qb(),r.Rb(15,"h2",13),r.Hc(16,"Eyob Tariku"),r.Qb(),r.Rb(17,"p"),r.Hc(18,"I am a full-stack web application developer & DevOps Engineer. I build modern single-page applications (SPA) using "),r.Rb(19,"mark"),r.Hc(20,"Angular 2+"),r.Qb(),r.Hc(21,", RESTful API services using "),r.Rb(22,"mark"),r.Hc(23,"Django"),r.Qb(),r.Hc(24," and deploy them on a "),r.Rb(25,"mark"),r.Hc(26,"Cloud"),r.Qb(),r.Hc(27," provider of your choosing."),r.Qb(),r.Rb(28,"div",14),r.Rb(29,"a",15),r.dc("click",(function(){return i.downloadResume()})),r.Hc(30,"Download CV"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(31,"div",6),r.Rb(32,"div",16),r.Nb(33,"div",17),r.Rb(34,"div",18),r.Rb(35,"h2"),r.Hc(36,"What I Do"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(37,"div",6),r.Rb(38,"div",19),r.Rb(39,"div",20),r.Rb(40,"div",21),r.Rb(41,"div",22),r.Nb(42,"i",23),r.Qb(),r.Rb(43,"div",24),r.Rb(44,"h4"),r.Hc(45,"Web Application"),r.Qb(),r.Rb(46,"p"),r.Hc(47,"I deliver modern web applications such as e-commerce sites, single-page web applications (SPA) & SaaS applications using Angular & TypeScript. The applications are guaranteed to be beautiful, user-friendly, and follow the latest best practices."),r.Qb(),r.Qb(),r.Qb(),r.Rb(48,"div",21),r.Rb(49,"div",22),r.Nb(50,"i",25),r.Qb(),r.Rb(51,"div",24),r.Rb(52,"h4"),r.Hc(53,"RESTful API"),r.Qb(),r.Rb(54,"p"),r.Hc(55,"I build clean & well-structured RESTful APIs using Python, Django & Flask. My APIs are well-documented in accordance to the OpenAPI 2.0 specification and implement automated tests with a test coverage of at least 80%."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(56,"div",19),r.Rb(57,"div",20),r.Rb(58,"div",21),r.Rb(59,"div",22),r.Nb(60,"i",26),r.Qb(),r.Rb(61,"div",24),r.Rb(62,"h4"),r.Hc(63,"Cloud Computing"),r.Qb(),r.Rb(64,"p"),r.Hc(65,"I deploy web applications and API services to a cloud infrastructure such as Digital Ocean, GCP, AWS, or Heroku. By using sensible configurations, I ensure your deployed applications are stable, accessible & easily scalable."),r.Qb(),r.Qb(),r.Qb(),r.Rb(66,"div",21),r.Rb(67,"div",22),r.Nb(68,"i",27),r.Qb(),r.Rb(69,"div",24),r.Rb(70,"h4"),r.Hc(71,"DevOps"),r.Qb(),r.Rb(72,"p"),r.Hc(73,"To facilitate Agile software development, I setup a CI/CD pipeline using automation & continuous integration tools to reduce the time spent between development & production. These tools include GitLab, Ansible, Docker Travis CI, and Circle CI."),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Rb(74,"div",6),r.Rb(75,"div",16),r.Nb(76,"div",28),r.Fc(77,x,6,2,"ng-container",29),r.Nb(78,"div",30),r.Qb(),r.Qb(),r.Rb(79,"div",6),r.Rb(80,"div",31),r.Rb(81,"div",18),r.Rb(82,"h2"),r.Hc(83,"My Featured Skills"),r.Qb(),r.Qb(),r.Rb(84,"div",32),r.Fc(85,H,1,2,"app-spinner",33),r.Fc(86,z,2,1,"ng-container",29),r.Fc(87,N,3,0,"div",34),r.Qb(),r.Qb(),r.Rb(88,"div",35),r.Nb(89,"app-subscription"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()),2&t&&(r.zb(77),r.lc("ngIf",i.testimonials.length>0),r.zb(8),r.lc("ngIf",i.isFetchingSkills),r.zb(1),r.lc("ngIf",!i.isFetchingSkills),r.zb(1),r.lc("ngIf",i.featuredSkills.length>0))},directives:[o.l,S,C.a,s.a,o.k,s.c,M,F.a,c.f],styles:[".fill-block[_ngcontent-%COMP%]{min-height:480px!important;background-image:url(/assets/img/cover.jpg)}.fill-block[_ngcontent-%COMP%], .hp-text-block[_ngcontent-%COMP%]{border-radius:10px}#clients-carousel[_ngcontent-%COMP%], #testimonials-slide[_ngcontent-%COMP%]{display:block}.featured-skills-col[_ngcontent-%COMP%]{border-right:1.5px solid #333}.featured-skills[_ngcontent-%COMP%]{width:85%}.hp-text-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:2}mark[_ngcontent-%COMP%]{background-color:hsla(0,0%,39.2%,.6);border-radius:4px}@media(max-width:576px){.fill-block[_ngcontent-%COMP%]{background-image:url(/assets/img/mobile-cover.jpg)}.featured-skills-col[_ngcontent-%COMP%]{border-right:none}.featured-skills[_ngcontent-%COMP%]{width:100%}.more-skill-btn[_ngcontent-%COMP%]{text-align:center!important}}"]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(i){return new(i||t)},imports:[[c.g.forChild(A),e.f,l.a,s.b,o.b]]}),t})()}}]);
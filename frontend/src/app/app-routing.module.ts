import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('@resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('@portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('@contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('@feedback/feedback.module').then(m => m.FeedbackModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('@blog/blog.module').then(m => m.BlogModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

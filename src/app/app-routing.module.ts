import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BaComponent } from './ba/ba.component';
import { BcomComponent } from './bcom/bcom.component';
import { BscComponent } from './bsc/bsc.component';
import { CompscienceComponent } from './compscience/compscience.component';
import { BbaComponent } from './bba/bba.component';
import { McomComponent } from './mcom/mcom.component';
import { MaComponent } from './ma/ma.component';
import { AboutsarvodayaComponent } from './aboutsarvodaya/aboutsarvodaya.component';
import { NoticeComponent } from './notice/notice.component';
import { HostelComponent } from './hostel/hostel.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { LoginComponent } from './login/login.component';
import { Activity1Component } from './activity1/activity1.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth.guard';
import { Vip1Component } from './vip1/vip1.component';
import { Vip2Component } from './vip2/vip2.component';
import { Vip3Component } from './vip3/vip3.component';
import { Vip4Component } from './vip4/vip4.component';
import { Vip5Component } from './vip5/vip5.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { AbcidComponent } from './abcid/abcid.component';
import { PhotoScanCopyComponent } from './photo-scan-copy/photo-scan-copy.component';
import { AdmissionComitteeComponent } from './admission-comittee/admission-comittee.component';
import { IqacCommitteeComponent } from './iqac-committee/iqac-committee.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ba', component: BaComponent },
  { path: 'bcom', component: BcomComponent },
  { path: 'bsc', component: BscComponent },
  { path: 'compscience', component: CompscienceComponent },
  { path: 'bba', component: BbaComponent },
  { path: 'ma', component: MaComponent },
  { path: 'mcom', component: McomComponent },
  { path: 'sarvod', component: AboutsarvodayaComponent },
  { path: 'stunotic', component: NoticeComponent },
  { path: 'abouthostel', component: HostelComponent },
  { path: 'headernav', component: HeadernavComponent },
  {path:'login', component:LoginComponent},
  {path:'activity1',component:Activity1Component},
  {path:'dashboard',component:DashbordComponent, canActivate: [AuthGuard]},
  {path:'gallery',component:GallaryComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'vip1',component:Vip1Component},
  {path:'vip2',component:Vip2Component},
  {path:'vip3',component:Vip3Component},
  {path:'vip4',component:Vip4Component},
  {path:'vip5',component:Vip5Component},
  {path:'forgetpass',component:ForgetPassComponent},
  {path:'abcid',component:AbcidComponent},
  {path:'pscr',component:PhotoScanCopyComponent},
  {path:'admisioncum',component:AdmissionComitteeComponent},
  {path:'iqac',component:IqacCommitteeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

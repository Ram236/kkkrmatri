import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfilesHomeComponent } from './profiles-home/profiles-home.component';
import { ProfileRoutingModule } from './profiles-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfilesHomeComponent, ProfileCreateComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProfilesModule {}

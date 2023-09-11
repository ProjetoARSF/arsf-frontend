import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selectable } from 'src/app/shared/interfaces/selectable';
import { ApplicationModel } from 'src/app/shared/models/application.model';
import { FeatureModel } from 'src/app/shared/models/feature.model';
import { PermissionModel } from 'src/app/shared/models/permission.model';
import { RoleModel } from 'src/app/shared/models/role.model';
import { ApplicationService } from 'src/app/shared/services/application.service';
import { RoleXFeatureService } from 'src/app/shared/services/role-x-feature.service';
import { RoleService } from 'src/app/shared/services/role.service';

@Component({
  selector: 'app-perfil-x-funcionalidade',
  templateUrl: './perfil-x-funcionalidade.component.html',
  styleUrls: ['./perfil-x-funcionalidade.component.scss']
})
export class PerfilXFuncionalidadeComponent implements OnInit, OnChanges {

  protected applications: Array<ApplicationModel> = new Array<ApplicationModel>();
  protected application: ApplicationModel;

  protected roles: Array<RoleModel> = new Array<RoleModel>();
  protected role: RoleModel;

  protected leftFeatures: Array<FeatureModel> = new Array<FeatureModel>();
  protected rightFeatures: Array<FeatureModel> = new Array<FeatureModel>();

  protected rightFeature: FeatureModel = null;

  protected leftPermissions: Array<PermissionModel> = new Array<PermissionModel>();
  protected rightPermissions: Array<PermissionModel> = new Array<PermissionModel>();

  constructor(
    private applicationService: ApplicationService,
    private roleService: RoleService,
    private roleXFeatureService: RoleXFeatureService
  ) { }

  ngOnInit(): void {
    this.applications = this.applicationService.getApplicatations();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  onChangeApplication(): void {
    this.clear();
    const subscription: Subscription = this.roleService.getRoleByAppId(this.application.getIdApp()).subscribe({
      next: (next) => this.roles = next,
      complete: () => {
        subscription.unsubscribe();
        if (!this.roles.length) {
          this.role = undefined;
        }
      }
    });
  }

  onChangeRole(): void {
    this.clear();
    const subscription: Subscription = this.roleXFeatureService.getFeaturesByRole(this.application.getIdApp(), this.role.getIdRole()).subscribe({
      next: (next) => {
        console.log(next)
        this.rightFeatures = next[0];
        this.leftFeatures = next[1];
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }

  protected onClickAddLeftFeature(event: Array<string>): void {
    event.forEach(str => {
      const feature = this.rightFeatures.filter(opt => opt.getOptionId() == str)[0];
      const index = this.rightFeatures.indexOf(feature);
      this.rightFeatures.splice(index, 1);
      this.leftFeatures.push(feature);
    });
  }

  protected onClickAddRightFeature(event: Array<string>): void {
    event.forEach(str => {
      const feature = this.leftFeatures.filter(opt => opt.getOptionId() == str)[0];
      const index = this.leftFeatures.indexOf(feature);
      this.leftFeatures.splice(index, 1);
      this.rightFeatures.push(feature);
    })
  }

  protected onClickAddLeftPermission(event: Array<string>): void {
    const featureIndex = this.rightFeatures.indexOf(this.rightFeature);
    const feature = this.rightFeatures.at(featureIndex);
    event.forEach(str => {
      const permission = feature.getActivePermissions().filter(opt => opt.getOptionId() == str)[0];
      const index = feature.getActivePermissions().indexOf(permission);
      feature.getActivePermissions().splice(index, 1);
      feature.getInactivePermissions().push(permission);
    })
  }

  protected onClickAddRightPermission(event: Array<string>): void {
    const featureIndex = this.rightFeatures.indexOf(this.rightFeature);
    const feature = this.rightFeatures.at(featureIndex);
    event.forEach(str => {
      const permission = feature.getInactivePermissions().filter(opt => opt.getOptionId() == str)[0];
      const index = feature.getInactivePermissions().indexOf(permission);
      feature.getInactivePermissions().splice(index, 1);
      feature.getActivePermissions().push(permission);
    })
  }

  public onExecute(): void {

  }

  public onExit(): void {

  }

  protected onClickRightFeature(event: string): void {

    if (event === 'unselected') {
      this.clearPermissions();
      return;
    }
    this.rightFeature = this.rightFeatures.filter(feat => feat.getIdFeature() === event)[0];
    this.leftPermissions = this.rightFeature.getInactivePermissions();
    this.rightPermissions = this.rightFeature.getActivePermissions();
  }

  private clear() {
    this.clearFeatures();
    this.clearPermissions();
  }

  private clearFeatures(): void {
    this.leftFeatures = new Array<FeatureModel>();
    this.rightFeatures = new Array<FeatureModel>();
  }

  private clearPermissions(): void {
    this.leftPermissions = new Array<PermissionModel>();
    this.rightPermissions = new Array<PermissionModel>();
  }
}

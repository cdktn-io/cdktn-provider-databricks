/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DisasterRecoveryFailoverGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#etag DisasterRecoveryFailoverGroup#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#failover_group_id DisasterRecoveryFailoverGroup#failover_group_id}
  */
  readonly failoverGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#initial_primary_region DisasterRecoveryFailoverGroup#initial_primary_region}
  */
  readonly initialPrimaryRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#parent DisasterRecoveryFailoverGroup#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#regions DisasterRecoveryFailoverGroup#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#unity_catalog_assets DisasterRecoveryFailoverGroup#unity_catalog_assets}
  */
  readonly unityCatalogAssets?: DisasterRecoveryFailoverGroupUnityCatalogAssets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#workspace_sets DisasterRecoveryFailoverGroup#workspace_sets}
  */
  readonly workspaceSets: DisasterRecoveryFailoverGroupWorkspaceSets[] | cdktn.IResolvable;
}
export interface DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}
  */
  readonly name: string;
}

export function disasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsToTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function disasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsToHclTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList extends cdktn.ComplexList {
  public internalValue? : DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference {
    return new DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#region DisasterRecoveryFailoverGroup#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#uri DisasterRecoveryFailoverGroup#uri}
  */
  readonly uri: string;
}

export function disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionToTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionToHclTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._uri = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._uri = value.uri;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList extends cdktn.ComplexList {
  public internalValue? : DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference {
    return new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#uri_by_region DisasterRecoveryFailoverGroup#uri_by_region}
  */
  readonly uriByRegion: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable;
}

export function disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsToTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    uri_by_region: cdktn.listMapper(disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionToTerraform, false)(struct!.uriByRegion),
  }
}


export function disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsToHclTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_by_region: {
      value: cdktn.listMapperHcl(disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionToHclTerraform, false)(struct!.uriByRegion),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uriByRegion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriByRegion = this._uriByRegion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uriByRegion.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uriByRegion.internalValue = value.uriByRegion;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uri_by_region - computed: false, optional: false, required: true
  private _uriByRegion = new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegionList(this, "uri_by_region", false);
  public get uriByRegion() {
    return this._uriByRegion;
  }
  public putUriByRegion(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable) {
    this._uriByRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriByRegionInput() {
    return this._uriByRegion.internalValue;
  }
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList extends cdktn.ComplexList {
  public internalValue? : DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference {
    return new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DisasterRecoveryFailoverGroupUnityCatalogAssets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#catalogs DisasterRecoveryFailoverGroup#catalogs}
  */
  readonly catalogs: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#data_replication_workspace_set DisasterRecoveryFailoverGroup#data_replication_workspace_set}
  */
  readonly dataReplicationWorkspaceSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#location_mappings DisasterRecoveryFailoverGroup#location_mappings}
  */
  readonly locationMappings?: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable;
}

export function disasterRecoveryFailoverGroupUnityCatalogAssetsToTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalogs: cdktn.listMapper(disasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsToTerraform, false)(struct!.catalogs),
    data_replication_workspace_set: cdktn.stringToTerraform(struct!.dataReplicationWorkspaceSet),
    location_mappings: cdktn.listMapper(disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsToTerraform, false)(struct!.locationMappings),
  }
}


export function disasterRecoveryFailoverGroupUnityCatalogAssetsToHclTerraform(struct?: DisasterRecoveryFailoverGroupUnityCatalogAssets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalogs: {
      value: cdktn.listMapperHcl(disasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsToHclTerraform, false)(struct!.catalogs),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList",
    },
    data_replication_workspace_set: {
      value: cdktn.stringToHclTerraform(struct!.dataReplicationWorkspaceSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_mappings: {
      value: cdktn.listMapperHcl(disasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsToHclTerraform, false)(struct!.locationMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DisasterRecoveryFailoverGroupUnityCatalogAssets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogs = this._catalogs?.internalValue;
    }
    if (this._dataReplicationWorkspaceSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataReplicationWorkspaceSet = this._dataReplicationWorkspaceSet;
    }
    if (this._locationMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationMappings = this._locationMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryFailoverGroupUnityCatalogAssets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._catalogs.internalValue = undefined;
      this._dataReplicationWorkspaceSet = undefined;
      this._locationMappings.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._catalogs.internalValue = value.catalogs;
      this._dataReplicationWorkspaceSet = value.dataReplicationWorkspaceSet;
      this._locationMappings.internalValue = value.locationMappings;
    }
  }

  // catalogs - computed: false, optional: false, required: true
  private _catalogs = new DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogsList(this, "catalogs", false);
  public get catalogs() {
    return this._catalogs;
  }
  public putCatalogs(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsCatalogs[] | cdktn.IResolvable) {
    this._catalogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogsInput() {
    return this._catalogs.internalValue;
  }

  // data_replication_workspace_set - computed: false, optional: false, required: true
  private _dataReplicationWorkspaceSet?: string; 
  public get dataReplicationWorkspaceSet() {
    return this.getStringAttribute('data_replication_workspace_set');
  }
  public set dataReplicationWorkspaceSet(value: string) {
    this._dataReplicationWorkspaceSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataReplicationWorkspaceSetInput() {
    return this._dataReplicationWorkspaceSet;
  }

  // location_mappings - computed: false, optional: true, required: false
  private _locationMappings = new DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappingsList(this, "location_mappings", false);
  public get locationMappings() {
    return this._locationMappings;
  }
  public putLocationMappings(value: DisasterRecoveryFailoverGroupUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable) {
    this._locationMappings.internalValue = value;
  }
  public resetLocationMappings() {
    this._locationMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationMappingsInput() {
    return this._locationMappings.internalValue;
  }
}
export interface DisasterRecoveryFailoverGroupWorkspaceSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#name DisasterRecoveryFailoverGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#replicate_workspace_assets DisasterRecoveryFailoverGroup#replicate_workspace_assets}
  */
  readonly replicateWorkspaceAssets: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#stable_url_names DisasterRecoveryFailoverGroup#stable_url_names}
  */
  readonly stableUrlNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#workspace_ids DisasterRecoveryFailoverGroup#workspace_ids}
  */
  readonly workspaceIds: string[];
}

export function disasterRecoveryFailoverGroupWorkspaceSetsToTerraform(struct?: DisasterRecoveryFailoverGroupWorkspaceSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    replicate_workspace_assets: cdktn.booleanToTerraform(struct!.replicateWorkspaceAssets),
    stable_url_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stableUrlNames),
    workspace_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workspaceIds),
  }
}


export function disasterRecoveryFailoverGroupWorkspaceSetsToHclTerraform(struct?: DisasterRecoveryFailoverGroupWorkspaceSets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicate_workspace_assets: {
      value: cdktn.booleanToHclTerraform(struct!.replicateWorkspaceAssets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stable_url_names: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.stableUrlNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    workspace_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.workspaceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DisasterRecoveryFailoverGroupWorkspaceSets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._replicateWorkspaceAssets !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicateWorkspaceAssets = this._replicateWorkspaceAssets;
    }
    if (this._stableUrlNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.stableUrlNames = this._stableUrlNames;
    }
    if (this._workspaceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceIds = this._workspaceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DisasterRecoveryFailoverGroupWorkspaceSets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._replicateWorkspaceAssets = undefined;
      this._stableUrlNames = undefined;
      this._workspaceIds = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._replicateWorkspaceAssets = value.replicateWorkspaceAssets;
      this._stableUrlNames = value.stableUrlNames;
      this._workspaceIds = value.workspaceIds;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // replicate_workspace_assets - computed: false, optional: false, required: true
  private _replicateWorkspaceAssets?: boolean | cdktn.IResolvable; 
  public get replicateWorkspaceAssets() {
    return this.getBooleanAttribute('replicate_workspace_assets');
  }
  public set replicateWorkspaceAssets(value: boolean | cdktn.IResolvable) {
    this._replicateWorkspaceAssets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateWorkspaceAssetsInput() {
    return this._replicateWorkspaceAssets;
  }

  // stable_url_names - computed: false, optional: true, required: false
  private _stableUrlNames?: string[]; 
  public get stableUrlNames() {
    return this.getListAttribute('stable_url_names');
  }
  public set stableUrlNames(value: string[]) {
    this._stableUrlNames = value;
  }
  public resetStableUrlNames() {
    this._stableUrlNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stableUrlNamesInput() {
    return this._stableUrlNames;
  }

  // workspace_ids - computed: false, optional: false, required: true
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return this.getListAttribute('workspace_ids');
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }
}

export class DisasterRecoveryFailoverGroupWorkspaceSetsList extends cdktn.ComplexList {
  public internalValue? : DisasterRecoveryFailoverGroupWorkspaceSets[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference {
    return new DisasterRecoveryFailoverGroupWorkspaceSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group}
*/
export class DisasterRecoveryFailoverGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_disaster_recovery_failover_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DisasterRecoveryFailoverGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DisasterRecoveryFailoverGroup to import
  * @param importFromId The id of the existing DisasterRecoveryFailoverGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DisasterRecoveryFailoverGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_disaster_recovery_failover_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/disaster_recovery_failover_group databricks_disaster_recovery_failover_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DisasterRecoveryFailoverGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DisasterRecoveryFailoverGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_disaster_recovery_failover_group',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.115.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._etag = config.etag;
    this._failoverGroupId = config.failoverGroupId;
    this._initialPrimaryRegion = config.initialPrimaryRegion;
    this._parent = config.parent;
    this._regions = config.regions;
    this._unityCatalogAssets.internalValue = config.unityCatalogAssets;
    this._workspaceSets.internalValue = config.workspaceSets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_primary_region - computed: true, optional: false, required: false
  public get effectivePrimaryRegion() {
    return this.getStringAttribute('effective_primary_region');
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // failover_group_id - computed: false, optional: false, required: true
  private _failoverGroupId?: string; 
  public get failoverGroupId() {
    return this.getStringAttribute('failover_group_id');
  }
  public set failoverGroupId(value: string) {
    this._failoverGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverGroupIdInput() {
    return this._failoverGroupId;
  }

  // initial_primary_region - computed: false, optional: false, required: true
  private _initialPrimaryRegion?: string; 
  public get initialPrimaryRegion() {
    return this.getStringAttribute('initial_primary_region');
  }
  public set initialPrimaryRegion(value: string) {
    this._initialPrimaryRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPrimaryRegionInput() {
    return this._initialPrimaryRegion;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // replication_point - computed: true, optional: false, required: false
  public get replicationPoint() {
    return this.getStringAttribute('replication_point');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // unity_catalog_assets - computed: false, optional: true, required: false
  private _unityCatalogAssets = new DisasterRecoveryFailoverGroupUnityCatalogAssetsOutputReference(this, "unity_catalog_assets");
  public get unityCatalogAssets() {
    return this._unityCatalogAssets;
  }
  public putUnityCatalogAssets(value: DisasterRecoveryFailoverGroupUnityCatalogAssets) {
    this._unityCatalogAssets.internalValue = value;
  }
  public resetUnityCatalogAssets() {
    this._unityCatalogAssets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogAssetsInput() {
    return this._unityCatalogAssets.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workspace_sets - computed: false, optional: false, required: true
  private _workspaceSets = new DisasterRecoveryFailoverGroupWorkspaceSetsList(this, "workspace_sets", false);
  public get workspaceSets() {
    return this._workspaceSets;
  }
  public putWorkspaceSets(value: DisasterRecoveryFailoverGroupWorkspaceSets[] | cdktn.IResolvable) {
    this._workspaceSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSetsInput() {
    return this._workspaceSets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      etag: cdktn.stringToTerraform(this._etag),
      failover_group_id: cdktn.stringToTerraform(this._failoverGroupId),
      initial_primary_region: cdktn.stringToTerraform(this._initialPrimaryRegion),
      parent: cdktn.stringToTerraform(this._parent),
      regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._regions),
      unity_catalog_assets: disasterRecoveryFailoverGroupUnityCatalogAssetsToTerraform(this._unityCatalogAssets.internalValue),
      workspace_sets: cdktn.listMapper(disasterRecoveryFailoverGroupWorkspaceSetsToTerraform, false)(this._workspaceSets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      etag: {
        value: cdktn.stringToHclTerraform(this._etag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_group_id: {
        value: cdktn.stringToHclTerraform(this._failoverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_primary_region: {
        value: cdktn.stringToHclTerraform(this._initialPrimaryRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unity_catalog_assets: {
        value: disasterRecoveryFailoverGroupUnityCatalogAssetsToHclTerraform(this._unityCatalogAssets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DisasterRecoveryFailoverGroupUnityCatalogAssets",
      },
      workspace_sets: {
        value: cdktn.listMapperHcl(disasterRecoveryFailoverGroupWorkspaceSetsToHclTerraform, false)(this._workspaceSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DisasterRecoveryFailoverGroupWorkspaceSetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

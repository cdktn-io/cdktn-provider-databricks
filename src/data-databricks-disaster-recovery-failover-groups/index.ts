/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksDisasterRecoveryFailoverGroupsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#page_size DataDatabricksDisasterRecoveryFailoverGroups#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#parent DataDatabricksDisasterRecoveryFailoverGroups#parent}
  */
  readonly parent: string;
}
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}
  */
  readonly name: string;
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference {
    return new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#region DataDatabricksDisasterRecoveryFailoverGroups#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#uri DataDatabricksDisasterRecoveryFailoverGroups#uri}
  */
  readonly uri: string;
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion | undefined {
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

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._uri = value.uri;
    }
  }

  // region - computed: true, optional: false, required: true
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

  // uri - computed: true, optional: false, required: true
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference {
    return new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#uri_by_region DataDatabricksDisasterRecoveryFailoverGroups#uri_by_region}
  */
  readonly uriByRegion: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable;
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    uri_by_region: cdktn.listMapper(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionToTerraform, false)(struct!.uriByRegion),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_by_region: {
      value: cdktn.listMapperHcl(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionToHclTerraform, false)(struct!.uriByRegion),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings | cdktn.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // uri_by_region - computed: true, optional: false, required: true
  private _uriByRegion = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegionList(this, "uri_by_region", false);
  public get uriByRegion() {
    return this._uriByRegion;
  }
  public putUriByRegion(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsUriByRegion[] | cdktn.IResolvable) {
    this._uriByRegion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriByRegionInput() {
    return this._uriByRegion.internalValue;
  }
}

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference {
    return new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#catalogs DataDatabricksDisasterRecoveryFailoverGroups#catalogs}
  */
  readonly catalogs: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#data_replication_workspace_set DataDatabricksDisasterRecoveryFailoverGroups#data_replication_workspace_set}
  */
  readonly dataReplicationWorkspaceSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#location_mappings DataDatabricksDisasterRecoveryFailoverGroups#location_mappings}
  */
  readonly locationMappings?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable;
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalogs: cdktn.listMapper(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsToTerraform, false)(struct!.catalogs),
    data_replication_workspace_set: cdktn.stringToTerraform(struct!.dataReplicationWorkspaceSet),
    location_mappings: cdktn.listMapper(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsToTerraform, false)(struct!.locationMappings),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalogs: {
      value: cdktn.listMapperHcl(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsToHclTerraform, false)(struct!.catalogs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList",
    },
    data_replication_workspace_set: {
      value: cdktn.stringToHclTerraform(struct!.dataReplicationWorkspaceSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_mappings: {
      value: cdktn.listMapperHcl(dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsToHclTerraform, false)(struct!.locationMappings),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets | undefined {
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

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogs.internalValue = undefined;
      this._dataReplicationWorkspaceSet = undefined;
      this._locationMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogs.internalValue = value.catalogs;
      this._dataReplicationWorkspaceSet = value.dataReplicationWorkspaceSet;
      this._locationMappings.internalValue = value.locationMappings;
    }
  }

  // catalogs - computed: true, optional: false, required: true
  private _catalogs = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogsList(this, "catalogs", false);
  public get catalogs() {
    return this._catalogs;
  }
  public putCatalogs(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsCatalogs[] | cdktn.IResolvable) {
    this._catalogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogsInput() {
    return this._catalogs.internalValue;
  }

  // data_replication_workspace_set - computed: true, optional: false, required: true
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

  // location_mappings - computed: true, optional: true, required: false
  private _locationMappings = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappingsList(this, "location_mappings", false);
  public get locationMappings() {
    return this._locationMappings;
  }
  public putLocationMappings(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsLocationMappings[] | cdktn.IResolvable) {
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
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#replicate_workspace_assets DataDatabricksDisasterRecoveryFailoverGroups#replicate_workspace_assets}
  */
  readonly replicateWorkspaceAssets?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#stable_url_names DataDatabricksDisasterRecoveryFailoverGroups#stable_url_names}
  */
  readonly stableUrlNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#workspace_ids DataDatabricksDisasterRecoveryFailoverGroups#workspace_ids}
  */
  readonly workspaceIds: string[];
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    replicate_workspace_assets: cdktn.booleanToTerraform(struct!.replicateWorkspaceAssets),
    stable_url_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.stableUrlNames),
    workspace_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.workspaceIds),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets | undefined {
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

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._replicateWorkspaceAssets = undefined;
      this._stableUrlNames = undefined;
      this._workspaceIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._replicateWorkspaceAssets = value.replicateWorkspaceAssets;
      this._stableUrlNames = value.stableUrlNames;
      this._workspaceIds = value.workspaceIds;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // replicate_workspace_assets - computed: true, optional: true, required: false
  private _replicateWorkspaceAssets?: boolean | cdktn.IResolvable; 
  public get replicateWorkspaceAssets() {
    return this.getBooleanAttribute('replicate_workspace_assets');
  }
  public set replicateWorkspaceAssets(value: boolean | cdktn.IResolvable) {
    this._replicateWorkspaceAssets = value;
  }
  public resetReplicateWorkspaceAssets() {
    this._replicateWorkspaceAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateWorkspaceAssetsInput() {
    return this._replicateWorkspaceAssets;
  }

  // stable_url_names - computed: true, optional: true, required: false
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

  // workspace_ids - computed: true, optional: false, required: true
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSets[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference {
    return new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#name DataDatabricksDisasterRecoveryFailoverGroups#name}
  */
  readonly name: string;
}

export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsToTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsToHclTerraform(struct?: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_primary_region - computed: true, optional: false, required: false
  public get effectivePrimaryRegion() {
    return this.getStringAttribute('effective_primary_region');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // initial_primary_region - computed: true, optional: false, required: false
  public get initialPrimaryRegion() {
    return this.getStringAttribute('initial_primary_region');
  }

  // name - computed: true, optional: false, required: true
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

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // replication_point - computed: true, optional: false, required: false
  public get replicationPoint() {
    return this.getStringAttribute('replication_point');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // unity_catalog_assets - computed: true, optional: false, required: false
  private _unityCatalogAssets = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsUnityCatalogAssetsOutputReference(this, "unity_catalog_assets");
  public get unityCatalogAssets() {
    return this._unityCatalogAssets;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workspace_sets - computed: true, optional: false, required: false
  private _workspaceSets = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsWorkspaceSetsList(this, "workspace_sets", false);
  public get workspaceSets() {
    return this._workspaceSets;
  }
}

export class DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroups[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference {
    return new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups databricks_disaster_recovery_failover_groups}
*/
export class DataDatabricksDisasterRecoveryFailoverGroups extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_disaster_recovery_failover_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksDisasterRecoveryFailoverGroups resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksDisasterRecoveryFailoverGroups to import
  * @param importFromId The id of the existing DataDatabricksDisasterRecoveryFailoverGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksDisasterRecoveryFailoverGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_disaster_recovery_failover_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/disaster_recovery_failover_groups databricks_disaster_recovery_failover_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksDisasterRecoveryFailoverGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksDisasterRecoveryFailoverGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_disaster_recovery_failover_groups',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.128.0',
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
    this._pageSize = config.pageSize;
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failover_groups - computed: true, optional: false, required: false
  private _failoverGroups = new DataDatabricksDisasterRecoveryFailoverGroupsFailoverGroupsList(this, "failover_groups", false);
  public get failoverGroups() {
    return this._failoverGroups;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      parent: cdktn.stringToTerraform(this._parent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

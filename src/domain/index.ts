/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DomainConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#business_owner_ids Domain#business_owner_ids}
  */
  readonly businessOwnerIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#domain_id Domain#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#draft Domain#draft}
  */
  readonly draft?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#icon Domain#icon}
  */
  readonly icon?: DomainIcon;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#parent_domain_id Domain#parent_domain_id}
  */
  readonly parentDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#provider_config Domain#provider_config}
  */
  readonly providerConfig?: DomainProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#subtitle Domain#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#tag_key Domain#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#technical_owner_ids Domain#technical_owner_ids}
  */
  readonly technicalOwnerIds?: number[];
}
export interface DomainIcon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#color Domain#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#name Domain#name}
  */
  readonly name?: string;
}

export function domainIconToTerraform(struct?: DomainIcon | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    color: cdktn.stringToTerraform(struct!.color),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function domainIconToHclTerraform(struct?: DomainIcon | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    color: {
      value: cdktn.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DomainIconOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainIcon | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainIcon | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DomainProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#workspace_id Domain#workspace_id}
  */
  readonly workspaceId?: string;
}

export function domainProviderConfigToTerraform(struct?: DomainProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function domainProviderConfigToHclTerraform(struct?: DomainProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DomainProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain databricks_domain}
*/
export class Domain extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Domain resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.134.0/docs/resources/domain databricks_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_domain',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.134.0',
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
    this._businessOwnerIds = config.businessOwnerIds;
    this._description = config.description;
    this._domainId = config.domainId;
    this._draft = config.draft;
    this._icon.internalValue = config.icon;
    this._parentDomainId = config.parentDomainId;
    this._providerConfig.internalValue = config.providerConfig;
    this._subtitle = config.subtitle;
    this._tagKey = config.tagKey;
    this._technicalOwnerIds = config.technicalOwnerIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_owner_ids - computed: false, optional: true, required: false
  private _businessOwnerIds?: number[]; 
  public get businessOwnerIds() {
    return this.getNumberListAttribute('business_owner_ids');
  }
  public set businessOwnerIds(value: number[]) {
    this._businessOwnerIds = value;
  }
  public resetBusinessOwnerIds() {
    this._businessOwnerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessOwnerIdsInput() {
    return this._businessOwnerIds;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // domain_id - computed: true, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // draft - computed: true, optional: true, required: false
  private _draft?: boolean | cdktn.IResolvable; 
  public get draft() {
    return this.getBooleanAttribute('draft');
  }
  public set draft(value: boolean | cdktn.IResolvable) {
    this._draft = value;
  }
  public resetDraft() {
    this._draft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft;
  }

  // effective_draft - computed: true, optional: false, required: false
  public get effectiveDraft() {
    return this.getBooleanAttribute('effective_draft');
  }

  // icon - computed: false, optional: true, required: false
  private _icon = new DomainIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: DomainIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_domain_id - computed: false, optional: true, required: false
  private _parentDomainId?: string; 
  public get parentDomainId() {
    return this.getStringAttribute('parent_domain_id');
  }
  public set parentDomainId(value: string) {
    this._parentDomainId = value;
  }
  public resetParentDomainId() {
    this._parentDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDomainIdInput() {
    return this._parentDomainId;
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DomainProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DomainProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // technical_owner_ids - computed: false, optional: true, required: false
  private _technicalOwnerIds?: number[]; 
  public get technicalOwnerIds() {
    return this.getNumberListAttribute('technical_owner_ids');
  }
  public set technicalOwnerIds(value: number[]) {
    this._technicalOwnerIds = value;
  }
  public resetTechnicalOwnerIds() {
    this._technicalOwnerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technicalOwnerIdsInput() {
    return this._technicalOwnerIds;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_owner_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(this._businessOwnerIds),
      description: cdktn.stringToTerraform(this._description),
      domain_id: cdktn.stringToTerraform(this._domainId),
      draft: cdktn.booleanToTerraform(this._draft),
      icon: domainIconToTerraform(this._icon.internalValue),
      parent_domain_id: cdktn.stringToTerraform(this._parentDomainId),
      provider_config: domainProviderConfigToTerraform(this._providerConfig.internalValue),
      subtitle: cdktn.stringToTerraform(this._subtitle),
      tag_key: cdktn.stringToTerraform(this._tagKey),
      technical_owner_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(this._technicalOwnerIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_owner_ids: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._businessOwnerIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktn.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      draft: {
        value: cdktn.booleanToHclTerraform(this._draft),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: domainIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainIcon",
      },
      parent_domain_id: {
        value: cdktn.stringToHclTerraform(this._parentDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: domainProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainProviderConfig",
      },
      subtitle: {
        value: cdktn.stringToHclTerraform(this._subtitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key: {
        value: cdktn.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      technical_owner_ids: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._technicalOwnerIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

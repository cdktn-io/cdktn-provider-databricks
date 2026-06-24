# `metastore` Submodule <a name="`metastore` Submodule" id="@cdktn/provider-databricks.metastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Metastore <a name="Metastore" id="@cdktn/provider-databricks.metastore.Metastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.Metastore.Initializer"></a>

```python
from cdktn_provider_databricks import metastore

metastore.Metastore(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str = None,
  default_data_access_config_id: str = None,
  delta_sharing_organization_name: str = None,
  delta_sharing_recipient_token_lifetime_in_seconds: typing.Union[int, float] = None,
  delta_sharing_scope: str = None,
  external_access_enabled: bool | IResolvable = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  name: str = None,
  owner: str = None,
  privilege_model_version: str = None,
  provider_config: MetastoreProviderConfig = None,
  region: str = None,
  storage_root: str = None,
  storage_root_credential_id: str = None,
  storage_root_credential_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.defaultDataAccessConfigId">default_data_access_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingOrganizationName">delta_sharing_organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingRecipientTokenLifetimeInSeconds">delta_sharing_recipient_token_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingScope">delta_sharing_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.externalAccessEnabled">external_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#id Metastore#id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#name Metastore#name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.privilegeModelVersion">privilege_model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#region Metastore#region}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialId">storage_root_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialName">storage_root_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.api"></a>

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#api Metastore#api}

---

##### `default_data_access_config_id`<sup>Optional</sup> <a name="default_data_access_config_id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.defaultDataAccessConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `delta_sharing_organization_name`<sup>Optional</sup> <a name="delta_sharing_organization_name" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingOrganizationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `delta_sharing_recipient_token_lifetime_in_seconds`<sup>Optional</sup> <a name="delta_sharing_recipient_token_lifetime_in_seconds" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingRecipientTokenLifetimeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `delta_sharing_scope`<sup>Optional</sup> <a name="delta_sharing_scope" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.deltaSharingScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `external_access_enabled`<sup>Optional</sup> <a name="external_access_enabled" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.externalAccessEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.forceDestroy"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#force_destroy Metastore#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#name Metastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#owner Metastore#owner}.

---

##### `privilege_model_version`<sup>Optional</sup> <a name="privilege_model_version" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.privilegeModelVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#provider_config Metastore#provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#region Metastore#region}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRoot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root Metastore#storage_root}.

---

##### `storage_root_credential_id`<sup>Optional</sup> <a name="storage_root_credential_id" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}.

---

##### `storage_root_credential_name`<sup>Optional</sup> <a name="storage_root_credential_name" id="@cdktn/provider-databricks.metastore.Metastore.Initializer.parameter.storageRootCredentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId">reset_default_data_access_config_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName">reset_delta_sharing_organization_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds">reset_delta_sharing_recipient_token_lifetime_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope">reset_delta_sharing_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled">reset_external_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion">reset_privilege_model_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot">reset_storage_root</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId">reset_storage_root_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName">reset_storage_root_credential_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.metastore.Metastore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.metastore.Metastore.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.metastore.Metastore.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.metastore.Metastore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.metastore.Metastore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.metastore.Metastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.metastore.Metastore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.metastore.Metastore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.metastore.Metastore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.metastore.Metastore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.metastore.Metastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.metastore.Metastore.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.metastore.Metastore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.Metastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.metastore.Metastore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.metastore.Metastore.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.metastore.Metastore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.metastore.Metastore.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#workspace_id Metastore#workspace_id}.

---

##### `reset_api` <a name="reset_api" id="@cdktn/provider-databricks.metastore.Metastore.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_default_data_access_config_id` <a name="reset_default_data_access_config_id" id="@cdktn/provider-databricks.metastore.Metastore.resetDefaultDataAccessConfigId"></a>

```python
def reset_default_data_access_config_id() -> None
```

##### `reset_delta_sharing_organization_name` <a name="reset_delta_sharing_organization_name" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingOrganizationName"></a>

```python
def reset_delta_sharing_organization_name() -> None
```

##### `reset_delta_sharing_recipient_token_lifetime_in_seconds` <a name="reset_delta_sharing_recipient_token_lifetime_in_seconds" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```python
def reset_delta_sharing_recipient_token_lifetime_in_seconds() -> None
```

##### `reset_delta_sharing_scope` <a name="reset_delta_sharing_scope" id="@cdktn/provider-databricks.metastore.Metastore.resetDeltaSharingScope"></a>

```python
def reset_delta_sharing_scope() -> None
```

##### `reset_external_access_enabled` <a name="reset_external_access_enabled" id="@cdktn/provider-databricks.metastore.Metastore.resetExternalAccessEnabled"></a>

```python
def reset_external_access_enabled() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktn/provider-databricks.metastore.Metastore.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.metastore.Metastore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-databricks.metastore.Metastore.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-databricks.metastore.Metastore.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_privilege_model_version` <a name="reset_privilege_model_version" id="@cdktn/provider-databricks.metastore.Metastore.resetPrivilegeModelVersion"></a>

```python
def reset_privilege_model_version() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.metastore.Metastore.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-databricks.metastore.Metastore.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_root` <a name="reset_storage_root" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRoot"></a>

```python
def reset_storage_root() -> None
```

##### `reset_storage_root_credential_id` <a name="reset_storage_root_credential_id" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialId"></a>

```python
def reset_storage_root_credential_id() -> None
```

##### `reset_storage_root_credential_name` <a name="reset_storage_root_credential_name" id="@cdktn/provider-databricks.metastore.Metastore.resetStorageRootCredentialName"></a>

```python
def reset_storage_root_credential_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct"></a>

```python
from cdktn_provider_databricks import metastore

metastore.Metastore.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement"></a>

```python
from cdktn_provider_databricks import metastore

metastore.Metastore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource"></a>

```python
from cdktn_provider_databricks import metastore

metastore.Metastore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.metastore.Metastore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import metastore

metastore.Metastore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Metastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Metastore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Metastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Metastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId">global_metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput">default_data_access_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput">delta_sharing_organization_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput">delta_sharing_recipient_token_lifetime_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput">delta_sharing_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput">external_access_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput">force_destroy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput">privilege_model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput">storage_root_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput">storage_root_credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput">storage_root_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId">default_data_access_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName">delta_sharing_organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds">delta_sharing_recipient_token_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope">delta_sharing_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled">external_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion">privilege_model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRoot">storage_root</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId">storage_root_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName">storage_root_credential_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.metastore.Metastore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.metastore.Metastore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.metastore.Metastore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.metastore.Metastore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.metastore.Metastore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.Metastore.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.Metastore.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.metastore.Metastore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.metastore.Metastore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.Metastore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.Metastore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.Metastore.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-databricks.metastore.Metastore.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-databricks.metastore.Metastore.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.metastore.Metastore.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `global_metastore_id`<sup>Required</sup> <a name="global_metastore_id" id="@cdktn/provider-databricks.metastore.Metastore.property.globalMetastoreId"></a>

```python
global_metastore_id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.metastore.Metastore.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfig"></a>

```python
provider_config: MetastoreProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference">MetastoreProviderConfigOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.metastore.Metastore.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-databricks.metastore.Metastore.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `default_data_access_config_id_input`<sup>Optional</sup> <a name="default_data_access_config_id_input" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigIdInput"></a>

```python
default_data_access_config_id_input: str
```

- *Type:* str

---

##### `delta_sharing_organization_name_input`<sup>Optional</sup> <a name="delta_sharing_organization_name_input" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationNameInput"></a>

```python
delta_sharing_organization_name_input: str
```

- *Type:* str

---

##### `delta_sharing_recipient_token_lifetime_in_seconds_input`<sup>Optional</sup> <a name="delta_sharing_recipient_token_lifetime_in_seconds_input" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```python
delta_sharing_recipient_token_lifetime_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delta_sharing_scope_input`<sup>Optional</sup> <a name="delta_sharing_scope_input" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScopeInput"></a>

```python
delta_sharing_scope_input: str
```

- *Type:* str

---

##### `external_access_enabled_input`<sup>Optional</sup> <a name="external_access_enabled_input" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabledInput"></a>

```python
external_access_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroyInput"></a>

```python
force_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.metastore.Metastore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.metastore.Metastore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-databricks.metastore.Metastore.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `privilege_model_version_input`<sup>Optional</sup> <a name="privilege_model_version_input" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersionInput"></a>

```python
privilege_model_version_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.metastore.Metastore.property.providerConfigInput"></a>

```python
provider_config_input: MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.metastore.Metastore.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `storage_root_credential_id_input`<sup>Optional</sup> <a name="storage_root_credential_id_input" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialIdInput"></a>

```python
storage_root_credential_id_input: str
```

- *Type:* str

---

##### `storage_root_credential_name_input`<sup>Optional</sup> <a name="storage_root_credential_name_input" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialNameInput"></a>

```python
storage_root_credential_name_input: str
```

- *Type:* str

---

##### `storage_root_input`<sup>Optional</sup> <a name="storage_root_input" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootInput"></a>

```python
storage_root_input: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.metastore.Metastore.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `default_data_access_config_id`<sup>Required</sup> <a name="default_data_access_config_id" id="@cdktn/provider-databricks.metastore.Metastore.property.defaultDataAccessConfigId"></a>

```python
default_data_access_config_id: str
```

- *Type:* str

---

##### `delta_sharing_organization_name`<sup>Required</sup> <a name="delta_sharing_organization_name" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingOrganizationName"></a>

```python
delta_sharing_organization_name: str
```

- *Type:* str

---

##### `delta_sharing_recipient_token_lifetime_in_seconds`<sup>Required</sup> <a name="delta_sharing_recipient_token_lifetime_in_seconds" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```python
delta_sharing_recipient_token_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delta_sharing_scope`<sup>Required</sup> <a name="delta_sharing_scope" id="@cdktn/provider-databricks.metastore.Metastore.property.deltaSharingScope"></a>

```python
delta_sharing_scope: str
```

- *Type:* str

---

##### `external_access_enabled`<sup>Required</sup> <a name="external_access_enabled" id="@cdktn/provider-databricks.metastore.Metastore.property.externalAccessEnabled"></a>

```python
external_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktn/provider-databricks.metastore.Metastore.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.metastore.Metastore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.metastore.Metastore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.Metastore.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `privilege_model_version`<sup>Required</sup> <a name="privilege_model_version" id="@cdktn/provider-databricks.metastore.Metastore.property.privilegeModelVersion"></a>

```python
privilege_model_version: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.metastore.Metastore.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `storage_root`<sup>Required</sup> <a name="storage_root" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

---

##### `storage_root_credential_id`<sup>Required</sup> <a name="storage_root_credential_id" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialId"></a>

```python
storage_root_credential_id: str
```

- *Type:* str

---

##### `storage_root_credential_name`<sup>Required</sup> <a name="storage_root_credential_name" id="@cdktn/provider-databricks.metastore.Metastore.property.storageRootCredentialName"></a>

```python
storage_root_credential_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.metastore.Metastore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreConfig <a name="MetastoreConfig" id="@cdktn/provider-databricks.metastore.MetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreConfig.Initializer"></a>

```python
from cdktn_provider_databricks import metastore

metastore.MetastoreConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str = None,
  default_data_access_config_id: str = None,
  delta_sharing_organization_name: str = None,
  delta_sharing_recipient_token_lifetime_in_seconds: typing.Union[int, float] = None,
  delta_sharing_scope: str = None,
  external_access_enabled: bool | IResolvable = None,
  force_destroy: bool | IResolvable = None,
  id: str = None,
  name: str = None,
  owner: str = None,
  privilege_model_version: str = None,
  provider_config: MetastoreProviderConfig = None,
  region: str = None,
  storage_root: str = None,
  storage_root_credential_id: str = None,
  storage_root_credential_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId">default_data_access_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName">delta_sharing_organization_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds">delta_sharing_recipient_token_lifetime_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope">delta_sharing_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled">external_access_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy">force_destroy</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#force_destroy Metastore#force_destroy}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#id Metastore#id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#name Metastore#name}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#owner Metastore#owner}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion">privilege_model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#region Metastore#region}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot">storage_root</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root Metastore#storage_root}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId">storage_root_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName">storage_root_credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#api Metastore#api}

---

##### `default_data_access_config_id`<sup>Optional</sup> <a name="default_data_access_config_id" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.defaultDataAccessConfigId"></a>

```python
default_data_access_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#default_data_access_config_id Metastore#default_data_access_config_id}.

---

##### `delta_sharing_organization_name`<sup>Optional</sup> <a name="delta_sharing_organization_name" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingOrganizationName"></a>

```python
delta_sharing_organization_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_organization_name Metastore#delta_sharing_organization_name}.

---

##### `delta_sharing_recipient_token_lifetime_in_seconds`<sup>Optional</sup> <a name="delta_sharing_recipient_token_lifetime_in_seconds" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```python
delta_sharing_recipient_token_lifetime_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_recipient_token_lifetime_in_seconds Metastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `delta_sharing_scope`<sup>Optional</sup> <a name="delta_sharing_scope" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.deltaSharingScope"></a>

```python
delta_sharing_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#delta_sharing_scope Metastore#delta_sharing_scope}.

---

##### `external_access_enabled`<sup>Optional</sup> <a name="external_access_enabled" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.externalAccessEnabled"></a>

```python
external_access_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#external_access_enabled Metastore#external_access_enabled}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.forceDestroy"></a>

```python
force_destroy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#force_destroy Metastore#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#id Metastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#name Metastore#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#owner Metastore#owner}.

---

##### `privilege_model_version`<sup>Optional</sup> <a name="privilege_model_version" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.privilegeModelVersion"></a>

```python
privilege_model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#privilege_model_version Metastore#privilege_model_version}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.providerConfig"></a>

```python
provider_config: MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#provider_config Metastore#provider_config}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#region Metastore#region}.

---

##### `storage_root`<sup>Optional</sup> <a name="storage_root" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRoot"></a>

```python
storage_root: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root Metastore#storage_root}.

---

##### `storage_root_credential_id`<sup>Optional</sup> <a name="storage_root_credential_id" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialId"></a>

```python
storage_root_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_id Metastore#storage_root_credential_id}.

---

##### `storage_root_credential_name`<sup>Optional</sup> <a name="storage_root_credential_name" id="@cdktn/provider-databricks.metastore.MetastoreConfig.property.storageRootCredentialName"></a>

```python
storage_root_credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#storage_root_credential_name Metastore#storage_root_credential_name}.

---

### MetastoreProviderConfig <a name="MetastoreProviderConfig" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import metastore

metastore.MetastoreProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#workspace_id Metastore#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/resources/metastore#workspace_id Metastore#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MetastoreProviderConfigOutputReference <a name="MetastoreProviderConfigOutputReference" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import metastore

metastore.MetastoreProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.metastore.MetastoreProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.metastore.MetastoreProviderConfig">MetastoreProviderConfig</a>

---




# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktn/provider-databricks.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipal(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_principal_id: str = None,
  active: bool | IResolvable = None,
  allow_cluster_create: bool | IResolvable = None,
  allow_instance_pool_create: bool | IResolvable = None,
  api: str = None,
  application_id: str = None,
  databricks_sql_access: bool | IResolvable = None,
  disable_as_user_deletion: bool | IResolvable = None,
  display_name: str = None,
  external_id: str = None,
  force: bool | IResolvable = None,
  force_delete_home_dir: bool | IResolvable = None,
  force_delete_repos: bool | IResolvable = None,
  home: str = None,
  id: str = None,
  provider_config: ServicePrincipalProviderConfig = None,
  repos: str = None,
  workspace_access: bool | IResolvable = None,
  workspace_consume: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate">allow_cluster_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess">databricks_sql_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos">force_delete_repos</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess">workspace_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume">workspace_consume</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.aclPrincipalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowClusterCreate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.allowInstancePoolCreate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.api"></a>

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#api ServicePrincipal#api}

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.databricksSqlAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.disableAsUserDeletion"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.force"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteHomeDir"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.forceDeleteRepos"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.home"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#provider_config ServicePrincipal#provider_config}

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.repos"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspace_consume`<sup>Optional</sup> <a name="workspace_consume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.Initializer.parameter.workspaceConsume"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId">reset_acl_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate">reset_allow_cluster_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate">reset_allow_instance_pool_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess">reset_databricks_sql_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion">reset_disable_as_user_deletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir">reset_force_delete_home_dir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos">reset_force_delete_repos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetHome">reset_home</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos">reset_repos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess">reset_workspace_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume">reset_workspace_consume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}.

---

##### `reset_acl_principal_id` <a name="reset_acl_principal_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAclPrincipalId"></a>

```python
def reset_acl_principal_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_allow_cluster_create` <a name="reset_allow_cluster_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowClusterCreate"></a>

```python
def reset_allow_cluster_create() -> None
```

##### `reset_allow_instance_pool_create` <a name="reset_allow_instance_pool_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetAllowInstancePoolCreate"></a>

```python
def reset_allow_instance_pool_create() -> None
```

##### `reset_api` <a name="reset_api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_application_id` <a name="reset_application_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_databricks_sql_access` <a name="reset_databricks_sql_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDatabricksSqlAccess"></a>

```python
def reset_databricks_sql_access() -> None
```

##### `reset_disable_as_user_deletion` <a name="reset_disable_as_user_deletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisableAsUserDeletion"></a>

```python
def reset_disable_as_user_deletion() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_force_delete_home_dir` <a name="reset_force_delete_home_dir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteHomeDir"></a>

```python
def reset_force_delete_home_dir() -> None
```

##### `reset_force_delete_repos` <a name="reset_force_delete_repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetForceDeleteRepos"></a>

```python
def reset_force_delete_repos() -> None
```

##### `reset_home` <a name="reset_home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetHome"></a>

```python
def reset_home() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_repos` <a name="reset_repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetRepos"></a>

```python
def reset_repos() -> None
```

##### `reset_workspace_access` <a name="reset_workspace_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceAccess"></a>

```python
def reset_workspace_access() -> None
```

##### `reset_workspace_consume` <a name="reset_workspace_consume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.resetWorkspaceConsume"></a>

```python
def reset_workspace_consume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServicePrincipal resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipal.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServicePrincipal resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference">ServicePrincipalProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput">acl_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput">allow_cluster_create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput">allow_instance_pool_create_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput">databricks_sql_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput">disable_as_user_deletion_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput">force_delete_home_dir_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput">force_delete_repos_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput">force_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput">home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput">repos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput">workspace_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput">workspace_consume_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate">allow_cluster_create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos">force_delete_repos</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.home">home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.repos">repos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess">workspace_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume">workspace_consume</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfig"></a>

```python
provider_config: ServicePrincipalProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference">ServicePrincipalProviderConfigOutputReference</a>

---

##### `acl_principal_id_input`<sup>Optional</sup> <a name="acl_principal_id_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalIdInput"></a>

```python
acl_principal_id_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_cluster_create_input`<sup>Optional</sup> <a name="allow_cluster_create_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreateInput"></a>

```python
allow_cluster_create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_instance_pool_create_input`<sup>Optional</sup> <a name="allow_instance_pool_create_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreateInput"></a>

```python
allow_instance_pool_create_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `databricks_sql_access_input`<sup>Optional</sup> <a name="databricks_sql_access_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccessInput"></a>

```python
databricks_sql_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_as_user_deletion_input`<sup>Optional</sup> <a name="disable_as_user_deletion_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletionInput"></a>

```python
disable_as_user_deletion_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `force_delete_home_dir_input`<sup>Optional</sup> <a name="force_delete_home_dir_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDirInput"></a>

```python
force_delete_home_dir_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_delete_repos_input`<sup>Optional</sup> <a name="force_delete_repos_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteReposInput"></a>

```python
force_delete_repos_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceInput"></a>

```python
force_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `home_input`<sup>Optional</sup> <a name="home_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.homeInput"></a>

```python
home_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.providerConfigInput"></a>

```python
provider_config_input: ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

---

##### `repos_input`<sup>Optional</sup> <a name="repos_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.reposInput"></a>

```python
repos_input: str
```

- *Type:* str

---

##### `workspace_access_input`<sup>Optional</sup> <a name="workspace_access_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccessInput"></a>

```python
workspace_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_consume_input`<sup>Optional</sup> <a name="workspace_consume_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsumeInput"></a>

```python
workspace_consume_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `acl_principal_id`<sup>Required</sup> <a name="acl_principal_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_cluster_create`<sup>Required</sup> <a name="allow_cluster_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowClusterCreate"></a>

```python
allow_cluster_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `allow_instance_pool_create`<sup>Required</sup> <a name="allow_instance_pool_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `databricks_sql_access`<sup>Required</sup> <a name="databricks_sql_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.databricksSqlAccess"></a>

```python
databricks_sql_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_as_user_deletion`<sup>Required</sup> <a name="disable_as_user_deletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_delete_home_dir`<sup>Required</sup> <a name="force_delete_home_dir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `force_delete_repos`<sup>Required</sup> <a name="force_delete_repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.forceDeleteRepos"></a>

```python
force_delete_repos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.home"></a>

```python
home: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.repos"></a>

```python
repos: str
```

- *Type:* str

---

##### `workspace_access`<sup>Required</sup> <a name="workspace_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceAccess"></a>

```python
workspace_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `workspace_consume`<sup>Required</sup> <a name="workspace_consume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.workspaceConsume"></a>

```python
workspace_consume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipalConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acl_principal_id: str = None,
  active: bool | IResolvable = None,
  allow_cluster_create: bool | IResolvable = None,
  allow_instance_pool_create: bool | IResolvable = None,
  api: str = None,
  application_id: str = None,
  databricks_sql_access: bool | IResolvable = None,
  disable_as_user_deletion: bool | IResolvable = None,
  display_name: str = None,
  external_id: str = None,
  force: bool | IResolvable = None,
  force_delete_home_dir: bool | IResolvable = None,
  force_delete_repos: bool | IResolvable = None,
  home: str = None,
  id: str = None,
  provider_config: ServicePrincipalProviderConfig = None,
  repos: str = None,
  workspace_access: bool | IResolvable = None,
  workspace_consume: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#active ServicePrincipal#active}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate">allow_cluster_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate">allow_instance_pool_create</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess">databricks_sql_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion">disable_as_user_deletion</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force ServicePrincipal#force}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir">force_delete_home_dir</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos">force_delete_repos</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#home ServicePrincipal#home}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#repos ServicePrincipal#repos}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess">workspace_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume">workspace_consume</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#acl_principal_id ServicePrincipal#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#active ServicePrincipal#active}.

---

##### `allow_cluster_create`<sup>Optional</sup> <a name="allow_cluster_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowClusterCreate"></a>

```python
allow_cluster_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_cluster_create ServicePrincipal#allow_cluster_create}.

---

##### `allow_instance_pool_create`<sup>Optional</sup> <a name="allow_instance_pool_create" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.allowInstancePoolCreate"></a>

```python
allow_instance_pool_create: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#allow_instance_pool_create ServicePrincipal#allow_instance_pool_create}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#api ServicePrincipal#api}

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#application_id ServicePrincipal#application_id}.

---

##### `databricks_sql_access`<sup>Optional</sup> <a name="databricks_sql_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.databricksSqlAccess"></a>

```python
databricks_sql_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#databricks_sql_access ServicePrincipal#databricks_sql_access}.

---

##### `disable_as_user_deletion`<sup>Optional</sup> <a name="disable_as_user_deletion" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.disableAsUserDeletion"></a>

```python
disable_as_user_deletion: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#disable_as_user_deletion ServicePrincipal#disable_as_user_deletion}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#display_name ServicePrincipal#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#external_id ServicePrincipal#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force ServicePrincipal#force}.

---

##### `force_delete_home_dir`<sup>Optional</sup> <a name="force_delete_home_dir" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteHomeDir"></a>

```python
force_delete_home_dir: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_home_dir ServicePrincipal#force_delete_home_dir}.

---

##### `force_delete_repos`<sup>Optional</sup> <a name="force_delete_repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.forceDeleteRepos"></a>

```python
force_delete_repos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#force_delete_repos ServicePrincipal#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.home"></a>

```python
home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#home ServicePrincipal#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.providerConfig"></a>

```python
provider_config: ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#provider_config ServicePrincipal#provider_config}

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.repos"></a>

```python
repos: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#repos ServicePrincipal#repos}.

---

##### `workspace_access`<sup>Optional</sup> <a name="workspace_access" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceAccess"></a>

```python
workspace_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_access ServicePrincipal#workspace_access}.

---

##### `workspace_consume`<sup>Optional</sup> <a name="workspace_consume" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalConfig.property.workspaceConsume"></a>

```python
workspace_consume: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_consume ServicePrincipal#workspace_consume}.

---

### ServicePrincipalProviderConfig <a name="ServicePrincipalProviderConfig" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipalProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/service_principal#workspace_id ServicePrincipal#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalProviderConfigOutputReference <a name="ServicePrincipalProviderConfigOutputReference" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import service_principal

servicePrincipal.ServicePrincipalProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServicePrincipalProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.servicePrincipal.ServicePrincipalProviderConfig">ServicePrincipalProviderConfig</a>

---




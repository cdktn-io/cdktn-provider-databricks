# `dataDatabricksCurrentConfig` Submodule <a name="`dataDatabricksCurrentConfig` Submodule" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCurrentConfig <a name="DataDatabricksCurrentConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config databricks_current_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  api: str = None,
  auth_type: str = None,
  cloud: str = None,
  cloud_type: str = None,
  host: str = None,
  id: str = None,
  is_account: bool | IResolvable = None,
  provider_config: DataDatabricksCurrentConfigProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#account_id DataDatabricksCurrentConfig#account_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#auth_type DataDatabricksCurrentConfig#auth_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.cloud">cloud</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud DataDatabricksCurrentConfig#cloud}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.cloudType">cloud_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud_type DataDatabricksCurrentConfig#cloud_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#host DataDatabricksCurrentConfig#host}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#id DataDatabricksCurrentConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.isAccount">is_account</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#is_account DataDatabricksCurrentConfig#is_account}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a></code> | provider_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#account_id DataDatabricksCurrentConfig#account_id}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.api"></a>

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#api DataDatabricksCurrentConfig#api}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#auth_type DataDatabricksCurrentConfig#auth_type}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.cloud"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud DataDatabricksCurrentConfig#cloud}.

---

##### `cloud_type`<sup>Optional</sup> <a name="cloud_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.cloudType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud_type DataDatabricksCurrentConfig#cloud_type}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#host DataDatabricksCurrentConfig#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#id DataDatabricksCurrentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_account`<sup>Optional</sup> <a name="is_account" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.isAccount"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#is_account DataDatabricksCurrentConfig#is_account}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#provider_config DataDatabricksCurrentConfig#provider_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetCloud">reset_cloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetCloudType">reset_cloud_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetIsAccount">reset_is_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#workspace_id DataDatabricksCurrentConfig#workspace_id}.

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_api` <a name="reset_api" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_cloud` <a name="reset_cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetCloud"></a>

```python
def reset_cloud() -> None
```

##### `reset_cloud_type` <a name="reset_cloud_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetCloudType"></a>

```python
def reset_cloud_type() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_account` <a name="reset_is_account" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetIsAccount"></a>

```python
def reset_is_account() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksCurrentConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksCurrentConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksCurrentConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksCurrentConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksCurrentConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference">DataDatabricksCurrentConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudInput">cloud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudTypeInput">cloud_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.isAccountInput">is_account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudType">cloud_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.isAccount">is_account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksCurrentConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference">DataDatabricksCurrentConfigProviderConfigOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `cloud_input`<sup>Optional</sup> <a name="cloud_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudInput"></a>

```python
cloud_input: str
```

- *Type:* str

---

##### `cloud_type_input`<sup>Optional</sup> <a name="cloud_type_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudTypeInput"></a>

```python
cloud_type_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_account_input`<sup>Optional</sup> <a name="is_account_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.isAccountInput"></a>

```python
is_account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.providerConfigInput"></a>

```python
provider_config_input: DataDatabricksCurrentConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a>

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `cloud_type`<sup>Required</sup> <a name="cloud_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.cloudType"></a>

```python
cloud_type: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_account`<sup>Required</sup> <a name="is_account" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.isAccount"></a>

```python
is_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCurrentConfigConfig <a name="DataDatabricksCurrentConfigConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str = None,
  api: str = None,
  auth_type: str = None,
  cloud: str = None,
  cloud_type: str = None,
  host: str = None,
  id: str = None,
  is_account: bool | IResolvable = None,
  provider_config: DataDatabricksCurrentConfigProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#account_id DataDatabricksCurrentConfig#account_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#auth_type DataDatabricksCurrentConfig#auth_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.cloud">cloud</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud DataDatabricksCurrentConfig#cloud}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.cloudType">cloud_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud_type DataDatabricksCurrentConfig#cloud_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#host DataDatabricksCurrentConfig#host}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#id DataDatabricksCurrentConfig#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.isAccount">is_account</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#is_account DataDatabricksCurrentConfig#is_account}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a></code> | provider_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#account_id DataDatabricksCurrentConfig#account_id}.

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#api DataDatabricksCurrentConfig#api}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#auth_type DataDatabricksCurrentConfig#auth_type}.

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud DataDatabricksCurrentConfig#cloud}.

---

##### `cloud_type`<sup>Optional</sup> <a name="cloud_type" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.cloudType"></a>

```python
cloud_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#cloud_type DataDatabricksCurrentConfig#cloud_type}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#host DataDatabricksCurrentConfig#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#id DataDatabricksCurrentConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_account`<sup>Optional</sup> <a name="is_account" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.isAccount"></a>

```python
is_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#is_account DataDatabricksCurrentConfig#is_account}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksCurrentConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#provider_config DataDatabricksCurrentConfig#provider_config}

---

### DataDatabricksCurrentConfigProviderConfig <a name="DataDatabricksCurrentConfigProviderConfig" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#workspace_id DataDatabricksCurrentConfig#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/current_config#workspace_id DataDatabricksCurrentConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCurrentConfigProviderConfigOutputReference <a name="DataDatabricksCurrentConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_current_config

dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksCurrentConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksCurrentConfig.DataDatabricksCurrentConfigProviderConfig">DataDatabricksCurrentConfigProviderConfig</a>

---




# `dataDatabricksServicePrincipals` Submodule <a name="`dataDatabricksServicePrincipals` Submodule" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipals <a name="DataDatabricksServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals databricks_service_principals}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals(
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
  application_ids: typing.List[str] = None,
  display_name_contains: str = None,
  id: str = None,
  provider_config: DataDatabricksServicePrincipalsProviderConfig = None,
  service_principals: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.servicePrincipals">service_principals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]</code> | service_principals block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.api"></a>

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#api DataDatabricksServicePrincipals#api}

---

##### `application_ids`<sup>Optional</sup> <a name="application_ids" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.applicationIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#provider_config DataDatabricksServicePrincipals#provider_config}

---

##### `service_principals`<sup>Optional</sup> <a name="service_principals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.servicePrincipals"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]

service_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#service_principals DataDatabricksServicePrincipals#service_principals}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals">put_service_principals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds">reset_application_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals">reset_service_principals</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}.

---

##### `put_service_principals` <a name="put_service_principals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals"></a>

```python
def put_service_principals(
  value: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.putServicePrincipals.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]

---

##### `reset_api` <a name="reset_api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_application_ids` <a name="reset_application_ids" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds"></a>

```python
def reset_application_ids() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_service_principals` <a name="reset_service_principals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetServicePrincipals"></a>

```python
def reset_service_principals() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksServicePrincipals resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksServicePrincipals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals">service_principals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput">application_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput">service_principals_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfig"></a>

```python
provider_config: DataDatabricksServicePrincipalsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference">DataDatabricksServicePrincipalsProviderConfigOutputReference</a>

---

##### `service_principals`<sup>Required</sup> <a name="service_principals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipals"></a>

```python
service_principals: DataDatabricksServicePrincipalsServicePrincipalsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList">DataDatabricksServicePrincipalsServicePrincipalsList</a>

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `application_ids_input`<sup>Optional</sup> <a name="application_ids_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput"></a>

```python
application_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.providerConfigInput"></a>

```python
provider_config_input: DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---

##### `service_principals_input`<sup>Optional</sup> <a name="service_principals_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.servicePrincipalsInput"></a>

```python
service_principals_input: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `application_ids`<sup>Required</sup> <a name="application_ids" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds"></a>

```python
application_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalsConfig <a name="DataDatabricksServicePrincipalsConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api: str = None,
  application_ids: typing.List[str] = None,
  display_name_contains: str = None,
  id: str = None,
  provider_config: DataDatabricksServicePrincipalsProviderConfig = None,
  service_principals: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.api">api</a></code> | <code>str</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds">application_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals">service_principals</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]</code> | service_principals block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.api"></a>

```python
api: str
```

- *Type:* str

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#api DataDatabricksServicePrincipals#api}

---

##### `application_ids`<sup>Optional</sup> <a name="application_ids" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds"></a>

```python
application_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#provider_config DataDatabricksServicePrincipals#provider_config}

---

##### `service_principals`<sup>Optional</sup> <a name="service_principals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.servicePrincipals"></a>

```python
service_principals: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]

service_principals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#service_principals DataDatabricksServicePrincipals#service_principals}

---

### DataDatabricksServicePrincipalsProviderConfig <a name="DataDatabricksServicePrincipalsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#workspace_id DataDatabricksServicePrincipals#workspace_id}.

---

### DataDatabricksServicePrincipalsServicePrincipals <a name="DataDatabricksServicePrincipalsServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals(
  acl_principal_id: str = None,
  active: bool | IResolvable = None,
  application_id: str = None,
  display_name: str = None,
  external_id: str = None,
  home: str = None,
  id: str = None,
  repos: str = None,
  scim_id: str = None,
  sp_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home">home</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos">repos</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId">scim_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId">sp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}. |

---

##### `acl_principal_id`<sup>Optional</sup> <a name="acl_principal_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#acl_principal_id DataDatabricksServicePrincipals#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#active DataDatabricksServicePrincipals#active}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#application_id DataDatabricksServicePrincipals#application_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#display_name DataDatabricksServicePrincipals#display_name}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#external_id DataDatabricksServicePrincipals#external_id}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.home"></a>

```python
home: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#home DataDatabricksServicePrincipals#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.repos"></a>

```python
repos: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#repos DataDatabricksServicePrincipals#repos}.

---

##### `scim_id`<sup>Optional</sup> <a name="scim_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.scimId"></a>

```python
scim_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#scim_id DataDatabricksServicePrincipals#scim_id}.

---

##### `sp_id`<sup>Optional</sup> <a name="sp_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals.property.spId"></a>

```python
sp_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/service_principals#sp_id DataDatabricksServicePrincipals#sp_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalsProviderConfigOutputReference <a name="DataDatabricksServicePrincipalsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksServicePrincipalsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsProviderConfig">DataDatabricksServicePrincipalsProviderConfig</a>

---


### DataDatabricksServicePrincipalsServicePrincipalsList <a name="DataDatabricksServicePrincipalsServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksServicePrincipalsServicePrincipalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksServicePrincipalsServicePrincipals]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>]

---


### DataDatabricksServicePrincipalsServicePrincipalsOutputReference <a name="DataDatabricksServicePrincipalsServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_service_principals

dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId">reset_acl_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome">reset_home</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos">reset_repos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId">reset_scim_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId">reset_sp_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_acl_principal_id` <a name="reset_acl_principal_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetAclPrincipalId"></a>

```python
def reset_acl_principal_id() -> None
```

##### `reset_active` <a name="reset_active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_application_id` <a name="reset_application_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_home` <a name="reset_home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetHome"></a>

```python
def reset_home() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_repos` <a name="reset_repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetRepos"></a>

```python
def reset_repos() -> None
```

##### `reset_scim_id` <a name="reset_scim_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetScimId"></a>

```python
def reset_scim_id() -> None
```

##### `reset_sp_id` <a name="reset_sp_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.resetSpId"></a>

```python
def reset_sp_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput">acl_principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput">home_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput">repos_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput">scim_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput">sp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId">acl_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home">home</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos">repos</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId">scim_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId">sp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acl_principal_id_input`<sup>Optional</sup> <a name="acl_principal_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalIdInput"></a>

```python
acl_principal_id_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `home_input`<sup>Optional</sup> <a name="home_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.homeInput"></a>

```python
home_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repos_input`<sup>Optional</sup> <a name="repos_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.reposInput"></a>

```python
repos_input: str
```

- *Type:* str

---

##### `scim_id_input`<sup>Optional</sup> <a name="scim_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimIdInput"></a>

```python
scim_id_input: str
```

- *Type:* str

---

##### `sp_id_input`<sup>Optional</sup> <a name="sp_id_input" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spIdInput"></a>

```python
sp_id_input: str
```

- *Type:* str

---

##### `acl_principal_id`<sup>Required</sup> <a name="acl_principal_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.aclPrincipalId"></a>

```python
acl_principal_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.home"></a>

```python
home: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.repos"></a>

```python
repos: str
```

- *Type:* str

---

##### `scim_id`<sup>Required</sup> <a name="scim_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.scimId"></a>

```python
scim_id: str
```

- *Type:* str

---

##### `sp_id`<sup>Required</sup> <a name="sp_id" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.spId"></a>

```python
sp_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipalsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksServicePrincipalsServicePrincipals
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsServicePrincipals">DataDatabricksServicePrincipalsServicePrincipals</a>

---




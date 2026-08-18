# `dataDatabricksAiGatewayModelProviderService` Submodule <a name="`dataDatabricksAiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayModelProviderService <a name="DataDatabricksAiGatewayModelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAiGatewayModelProviderServiceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAiGatewayModelProviderService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.browseOnly">browse_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.browseOnly"></a>

```python
browse_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config"></a>

```python
config: DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayModelProviderServiceConfig <a name="DataDatabricksAiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAiGatewayModelProviderServiceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayModelProviderServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigA <a name="DataDatabricksAiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA(
  allow_all_targets: bool | IResolvable = None,
  amazon_bedrock: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock = None,
  anthropic: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic = None,
  azure_openai: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai = None,
  custom: DataDatabricksAiGatewayModelProviderServiceConfigCustom = None,
  forward_headers: bool | IResolvable = None,
  forward_query_parameters: bool | IResolvable = None,
  forward_unmanaged_paths: bool | IResolvable = None,
  gemini_enterprise: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise = None,
  inference_table: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable = None,
  microsoft_foundry: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry = None,
  openai: DataDatabricksAiGatewayModelProviderServiceConfigOpenai = None,
  provider_type: str = None,
  rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigRateLimits] = None,
  targets: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets">allow_all_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock">amazon_bedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai">azure_openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders">forward_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">forward_query_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">forward_unmanaged_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise">gemini_enterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable">inference_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry">microsoft_foundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits">rate_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}. |

---

##### `allow_all_targets`<sup>Optional</sup> <a name="allow_all_targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```python
allow_all_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}.

---

##### `amazon_bedrock`<sup>Optional</sup> <a name="amazon_bedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```python
amazon_bedrock: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}.

---

##### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```python
anthropic: DataDatabricksAiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}.

---

##### `azure_openai`<sup>Optional</sup> <a name="azure_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```python
azure_openai: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom"></a>

```python
custom: DataDatabricksAiGatewayModelProviderServiceConfigCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}.

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```python
forward_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}.

---

##### `forward_query_parameters`<sup>Optional</sup> <a name="forward_query_parameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```python
forward_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}.

---

##### `forward_unmanaged_paths`<sup>Optional</sup> <a name="forward_unmanaged_paths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```python
forward_unmanaged_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `gemini_enterprise`<sup>Optional</sup> <a name="gemini_enterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```python
gemini_enterprise: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}.

---

##### `inference_table`<sup>Optional</sup> <a name="inference_table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```python
inference_table: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}.

---

##### `microsoft_foundry`<sup>Optional</sup> <a name="microsoft_foundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```python
microsoft_foundry: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}.

---

##### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai"></a>

```python
openai: DataDatabricksAiGatewayModelProviderServiceConfigOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}.

---

##### `provider_type`<sup>Optional</sup> <a name="provider_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```python
rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets"></a>

```python
targets: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect(
  aws_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey = None,
  region: str = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```python
aws_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey(
  access_key_id: str = None,
  secret_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">secret_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}. |

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```python
secret_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropic <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect = None,
  relayed: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `relayed`<sup>Optional</sup> <a name="relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```python
relayed: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed(
  plan_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">plan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}. |

---

##### `plan_type`<sup>Optional</sup> <a name="plan_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```python
entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal(
  client_id: str = None,
  client_secret: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```python
client_secret: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustom <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey = None,
  base_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey = None,
  project_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable(
  parent: str,
  disabled: bool | IResolvable = None,
  table_name_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}. |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}.

---

##### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```python
entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal(
  client_id: str = None,
  client_secret: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```python
client_secret: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey = None,
  base_url: str = None,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigRateLimits <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits(
  key: str,
  renewal_period: str,
  principal: str = None,
  requests: typing.Union[int, float] = None,
  request_tag_key: str = None,
  request_tag_value: str = None,
  tokens: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}.

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}.

---

##### `request_tag_key`<sup>Optional</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}.

---

##### `request_tag_value`<sup>Optional</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigTargets <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets(
  model: str,
  native_api_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">native_api_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}.

---

##### `native_api_types`<sup>Optional</sup> <a name="native_api_types" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```python
native_api_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}.

---

### DataDatabricksAiGatewayModelProviderServiceProviderConfig <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">put_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_access_key` <a name="put_secret_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```python
def put_secret_access_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">put_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">reset_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_access_key` <a name="put_aws_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```python
def put_aws_access_key(
  access_key_id: str = None,
  secret_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey = None
) -> None
```

###### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}.

---

###### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.secretAccessKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `reset_aws_access_key` <a name="reset_aws_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```python
def reset_aws_access_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">aws_access_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_access_key`<sup>Required</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```python
aws_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `aws_access_key_input`<sup>Optional</sup> <a name="aws_access_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```python
aws_access_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```python
def put_direct(
  aws_access_key: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey = None,
  region: str = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential = None
) -> None
```

###### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.awsAccessKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">put_relayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">reset_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">reset_relayed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `put_relayed` <a name="put_relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```python
def put_relayed(
  plan_type: str = None
) -> None
```

###### `plan_type`<sup>Optional</sup> <a name="plan_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.planType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```

##### `reset_relayed` <a name="reset_relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```python
def reset_relayed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">relayed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `relayed`<sup>Required</sup> <a name="relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```python
relayed: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `relayed_input`<sup>Optional</sup> <a name="relayed_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```python
relayed_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">reset_plan_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plan_type` <a name="reset_plan_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```python
def reset_plan_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">plan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plan_type_input`<sup>Optional</sup> <a name="plan_type_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```python
plan_type_input: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">put_amazon_bedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">put_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">put_azure_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">put_gemini_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">put_inference_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">put_microsoft_foundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai">put_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">reset_allow_all_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">reset_amazon_bedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">reset_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">reset_azure_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">reset_forward_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">reset_forward_unmanaged_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">reset_gemini_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">reset_inference_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">reset_microsoft_foundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">reset_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">reset_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_bedrock` <a name="put_amazon_bedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```python
def put_amazon_bedrock(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_anthropic` <a name="put_anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```python
def put_anthropic(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect = None,
  relayed: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

###### `relayed`<sup>Optional</sup> <a name="relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.relayed"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}.

---

##### `put_azure_openai` <a name="put_azure_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```python
def put_azure_openai(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_custom` <a name="put_custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```python
def put_custom(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_gemini_enterprise` <a name="put_gemini_enterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```python
def put_gemini_enterprise(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_inference_table` <a name="put_inference_table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```python
def put_inference_table(
  parent: str,
  disabled: bool | IResolvable = None,
  table_name_prefix: str = None
) -> None
```

###### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}.

---

###### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.tableNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}.

---

##### `put_microsoft_foundry` <a name="put_microsoft_foundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```python
def put_microsoft_foundry(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_openai` <a name="put_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```python
def put_openai(
  direct: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```python
def put_rate_limits(
  value: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigRateLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]

---

##### `reset_allow_all_targets` <a name="reset_allow_all_targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```python
def reset_allow_all_targets() -> None
```

##### `reset_amazon_bedrock` <a name="reset_amazon_bedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```python
def reset_amazon_bedrock() -> None
```

##### `reset_anthropic` <a name="reset_anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```python
def reset_anthropic() -> None
```

##### `reset_azure_openai` <a name="reset_azure_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```python
def reset_azure_openai() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_forward_query_parameters` <a name="reset_forward_query_parameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```python
def reset_forward_query_parameters() -> None
```

##### `reset_forward_unmanaged_paths` <a name="reset_forward_unmanaged_paths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```python
def reset_forward_unmanaged_paths() -> None
```

##### `reset_gemini_enterprise` <a name="reset_gemini_enterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```python
def reset_gemini_enterprise() -> None
```

##### `reset_inference_table` <a name="reset_inference_table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```python
def reset_inference_table() -> None
```

##### `reset_microsoft_foundry` <a name="reset_microsoft_foundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```python
def reset_microsoft_foundry() -> None
```

##### `reset_openai` <a name="reset_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```python
def reset_openai() -> None
```

##### `reset_provider_type` <a name="reset_provider_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```python
def reset_provider_type() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">amazon_bedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">azure_openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">gemini_enterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">inference_table</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">microsoft_foundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">allow_all_targets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">amazon_bedrock_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">anthropic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">azure_openai_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">forward_query_parameters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">forward_unmanaged_paths_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">gemini_enterprise_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">inference_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">microsoft_foundry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">openai_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">rate_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">allow_all_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">forward_query_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">forward_unmanaged_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_bedrock`<sup>Required</sup> <a name="amazon_bedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```python
amazon_bedrock: DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `anthropic`<sup>Required</sup> <a name="anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```python
anthropic: DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `azure_openai`<sup>Required</sup> <a name="azure_openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```python
azure_openai: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```python
custom: DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `gemini_enterprise`<sup>Required</sup> <a name="gemini_enterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```python
gemini_enterprise: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `inference_table`<sup>Required</sup> <a name="inference_table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```python
inference_table: DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `microsoft_foundry`<sup>Required</sup> <a name="microsoft_foundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```python
microsoft_foundry: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `openai`<sup>Required</sup> <a name="openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```python
openai: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```python
rate_limits: DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```python
targets: DataDatabricksAiGatewayModelProviderServiceConfigTargetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `allow_all_targets_input`<sup>Optional</sup> <a name="allow_all_targets_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```python
allow_all_targets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `amazon_bedrock_input`<sup>Optional</sup> <a name="amazon_bedrock_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```python
amazon_bedrock_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `anthropic_input`<sup>Optional</sup> <a name="anthropic_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```python
anthropic_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `azure_openai_input`<sup>Optional</sup> <a name="azure_openai_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```python
azure_openai_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```python
custom_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_query_parameters_input`<sup>Optional</sup> <a name="forward_query_parameters_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```python
forward_query_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_unmanaged_paths_input`<sup>Optional</sup> <a name="forward_unmanaged_paths_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```python
forward_unmanaged_paths_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gemini_enterprise_input`<sup>Optional</sup> <a name="gemini_enterprise_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```python
gemini_enterprise_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `inference_table_input`<sup>Optional</sup> <a name="inference_table_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```python
inference_table_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `microsoft_foundry_input`<sup>Optional</sup> <a name="microsoft_foundry_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```python
microsoft_foundry_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `openai_input`<sup>Optional</sup> <a name="openai_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```python
openai_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```python
rate_limits_input: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]

---

##### `allow_all_targets`<sup>Required</sup> <a name="allow_all_targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```python
allow_all_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```python
forward_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_query_parameters`<sup>Required</sup> <a name="forward_query_parameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```python
forward_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_unmanaged_paths`<sup>Required</sup> <a name="forward_unmanaged_paths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```python
forward_unmanaged_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiGatewayModelProviderServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">put_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_secret` <a name="put_client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```python
def put_client_secret(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">put_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">reset_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `put_entra_service_principal` <a name="put_entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```python
def put_entra_service_principal(
  client_id: str = None,
  client_secret: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_entra_service_principal` <a name="reset_entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```python
def reset_entra_service_principal() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">entra_service_principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `entra_service_principal`<sup>Required</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```python
entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `entra_service_principal_input`<sup>Optional</sup> <a name="entra_service_principal_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```python
entra_service_principal_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

###### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.entraServicePrincipal"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey = None,
  base_url: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey = None,
  project_id: str = None,
  region: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">reset_table_name_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_table_name_prefix` <a name="reset_table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```python
def reset_table_name_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">put_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_secret` <a name="put_client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```python
def put_client_secret(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">put_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">reset_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `put_entra_service_principal` <a name="put_entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```python
def put_entra_service_principal(
  client_id: str = None,
  client_secret: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_entra_service_principal` <a name="reset_entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```python
def reset_entra_service_principal() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">entra_service_principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `entra_service_principal`<sup>Required</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```python
entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `entra_service_principal_input`<sup>Optional</sup> <a name="entra_service_principal_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```python
entra_service_principal_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal = None,
  service_credential: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

###### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.entraServicePrincipal"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```python
api_key: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey = None,
  base_url: str = None,
  organization: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```python
direct: DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>]

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">reset_request_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">reset_request_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_request_tag_key` <a name="reset_request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```python
def reset_request_tag_key() -> None
```

##### `reset_request_tag_value` <a name="reset_request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```python
def reset_request_tag_value() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">request_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">request_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `renewal_period_input`<sup>Optional</sup> <a name="renewal_period_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```python
renewal_period_input: str
```

- *Type:* str

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key_input`<sup>Optional</sup> <a name="request_tag_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```python
request_tag_key_input: str
```

- *Type:* str

---

##### `request_tag_value_input`<sup>Optional</sup> <a name="request_tag_value_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```python
request_tag_value_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key`<sup>Required</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

---

##### `request_tag_value`<sup>Required</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigRateLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>]

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">reset_native_api_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_native_api_types` <a name="reset_native_api_types" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```python
def reset_native_api_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">native_api_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">native_api_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `native_api_types_input`<sup>Optional</sup> <a name="native_api_types_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```python
native_api_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `native_api_types`<sup>Required</sup> <a name="native_api_types" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```python
native_api_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceConfigTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>

---


### DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_model_provider_service

dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayModelProviderServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---




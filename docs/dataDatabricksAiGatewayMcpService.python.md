# `dataDatabricksAiGatewayMcpService` Submodule <a name="`dataDatabricksAiGatewayMcpService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayMcpService <a name="DataDatabricksAiGatewayMcpService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService(
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
  provider_config: DataDatabricksAiGatewayMcpServiceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayMcpService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAiGatewayMcpService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAiGatewayMcpService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAiGatewayMcpService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayMcpService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.browseOnly">browse_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference">DataDatabricksAiGatewayMcpServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference">DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.browseOnly"></a>

```python
browse_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.config"></a>

```python
config: DataDatabricksAiGatewayMcpServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference">DataDatabricksAiGatewayMcpServiceConfigAOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference">DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiGatewayMcpServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayMcpServiceConfig <a name="DataDatabricksAiGatewayMcpServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAiGatewayMcpServiceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#provider_config DataDatabricksAiGatewayMcpService#provider_config}.

---

### DataDatabricksAiGatewayMcpServiceConfigA <a name="DataDatabricksAiGatewayMcpServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA(
  include_tool_selectors: typing.List[str] = None,
  rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayMcpServiceConfigRateLimits] = None,
  source_connection: DataDatabricksAiGatewayMcpServiceConfigSourceConnection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.includeToolSelectors">include_tool_selectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#include_tool_selectors DataDatabricksAiGatewayMcpService#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.rateLimits">rate_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#rate_limits DataDatabricksAiGatewayMcpService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#source_connection DataDatabricksAiGatewayMcpService#source_connection}. |

---

##### `include_tool_selectors`<sup>Optional</sup> <a name="include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.includeToolSelectors"></a>

```python
include_tool_selectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#include_tool_selectors DataDatabricksAiGatewayMcpService#include_tool_selectors}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.rateLimits"></a>

```python
rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayMcpServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#rate_limits DataDatabricksAiGatewayMcpService#rate_limits}.

---

##### `source_connection`<sup>Optional</sup> <a name="source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA.property.sourceConnection"></a>

```python
source_connection: DataDatabricksAiGatewayMcpServiceConfigSourceConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#source_connection DataDatabricksAiGatewayMcpService#source_connection}.

---

### DataDatabricksAiGatewayMcpServiceConfigRateLimits <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#key DataDatabricksAiGatewayMcpService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#renewal_period DataDatabricksAiGatewayMcpService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#principal DataDatabricksAiGatewayMcpService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#requests DataDatabricksAiGatewayMcpService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#request_tag_key DataDatabricksAiGatewayMcpService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#request_tag_value DataDatabricksAiGatewayMcpService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#tokens DataDatabricksAiGatewayMcpService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#key DataDatabricksAiGatewayMcpService#key}.

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#renewal_period DataDatabricksAiGatewayMcpService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#principal DataDatabricksAiGatewayMcpService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#requests DataDatabricksAiGatewayMcpService#requests}.

---

##### `request_tag_key`<sup>Optional</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#request_tag_key DataDatabricksAiGatewayMcpService#request_tag_key}.

---

##### `request_tag_value`<sup>Optional</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#request_tag_value DataDatabricksAiGatewayMcpService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#tokens DataDatabricksAiGatewayMcpService#tokens}.

---

### DataDatabricksAiGatewayMcpServiceConfigSourceConnection <a name="DataDatabricksAiGatewayMcpServiceConfigSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

### DataDatabricksAiGatewayMcpServiceProviderConfig <a name="DataDatabricksAiGatewayMcpServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#workspace_id DataDatabricksAiGatewayMcpService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayMcpServiceConfigAOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection">put_source_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors">reset_include_tool_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetSourceConnection">reset_source_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits"></a>

```python
def put_rate_limits(
  value: IResolvable | typing.List[DataDatabricksAiGatewayMcpServiceConfigRateLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]

---

##### `put_source_connection` <a name="put_source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection"></a>

```python
def put_source_connection(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.putSourceConnection.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/ai_gateway_mcp_service#name DataDatabricksAiGatewayMcpService#name}.

---

##### `reset_include_tool_selectors` <a name="reset_include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors"></a>

```python
def reset_include_tool_selectors() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_source_connection` <a name="reset_source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.resetSourceConnection"></a>

```python
def reset_source_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList">DataDatabricksAiGatewayMcpServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput">include_tool_selectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput">rate_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput">source_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors">include_tool_selectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA">DataDatabricksAiGatewayMcpServiceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimits"></a>

```python
rate_limits: DataDatabricksAiGatewayMcpServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList">DataDatabricksAiGatewayMcpServiceConfigRateLimitsList</a>

---

##### `source_connection`<sup>Required</sup> <a name="source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnection"></a>

```python
source_connection: DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference</a>

---

##### `include_tool_selectors_input`<sup>Optional</sup> <a name="include_tool_selectors_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput"></a>

```python
include_tool_selectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput"></a>

```python
rate_limits_input: IResolvable | typing.List[DataDatabricksAiGatewayMcpServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]

---

##### `source_connection_input`<sup>Optional</sup> <a name="source_connection_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput"></a>

```python
source_connection_input: IResolvable | DataDatabricksAiGatewayMcpServiceConfigSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a>

---

##### `include_tool_selectors`<sup>Required</sup> <a name="include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors"></a>

```python
include_tool_selectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiGatewayMcpServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigA">DataDatabricksAiGatewayMcpServiceConfigA</a>

---


### DataDatabricksAiGatewayMcpServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiGatewayMcpServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>]

---


### DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey">reset_request_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue">reset_request_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_request_tag_key` <a name="reset_request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```python
def reset_request_tag_key() -> None
```

##### `reset_request_tag_value` <a name="reset_request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```python
def reset_request_tag_value() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">request_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput">request_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `renewal_period_input`<sup>Optional</sup> <a name="renewal_period_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```python
renewal_period_input: str
```

- *Type:* str

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key_input`<sup>Optional</sup> <a name="request_tag_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```python
request_tag_key_input: str
```

- *Type:* str

---

##### `request_tag_value_input`<sup>Optional</sup> <a name="request_tag_value_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```python
request_tag_value_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key`<sup>Required</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

---

##### `request_tag_value`<sup>Required</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServiceConfigRateLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigRateLimits">DataDatabricksAiGatewayMcpServiceConfigRateLimits</a>

---


### DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference <a name="DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServiceConfigSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceConfigSourceConnection">DataDatabricksAiGatewayMcpServiceConfigSourceConnection</a>

---


### DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_service

dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpService.DataDatabricksAiGatewayMcpServiceProviderConfig">DataDatabricksAiGatewayMcpServiceProviderConfig</a>

---




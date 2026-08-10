# `dataDatabricksAiGatewayMcpServices` Submodule <a name="`dataDatabricksAiGatewayMcpServices` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayMcpServices <a name="DataDatabricksAiGatewayMcpServices" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services databricks_ai_gateway_mcp_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  include_browse: bool | IResolvable = None,
  page_size: typing.Union[int, float] = None,
  parent: str = None,
  provider_config: DataDatabricksAiGatewayMcpServicesProviderConfig = None,
  view: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_browse DataDatabricksAiGatewayMcpServices#include_browse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.includeBrowse"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_browse DataDatabricksAiGatewayMcpServices#include_browse}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.view"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetIncludeBrowse">reset_include_browse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

##### `reset_include_browse` <a name="reset_include_browse" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetIncludeBrowse"></a>

```python
def reset_include_browse() -> None
```

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayMcpServices resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAiGatewayMcpServices resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAiGatewayMcpServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAiGatewayMcpServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayMcpServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.mcpServices">mcp_services</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList">DataDatabricksAiGatewayMcpServicesMcpServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.includeBrowseInput">include_browse_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.viewInput">view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.view">view</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `mcp_services`<sup>Required</sup> <a name="mcp_services" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.mcpServices"></a>

```python
mcp_services: DataDatabricksAiGatewayMcpServicesMcpServicesList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList">DataDatabricksAiGatewayMcpServicesMcpServicesList</a>

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference</a>

---

##### `include_browse_input`<sup>Optional</sup> <a name="include_browse_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.includeBrowseInput"></a>

```python
include_browse_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiGatewayMcpServicesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.viewInput"></a>

```python
view_input: str
```

- *Type:* str

---

##### `include_browse`<sup>Required</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.includeBrowse"></a>

```python
include_browse: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.view"></a>

```python
view: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayMcpServicesConfig <a name="DataDatabricksAiGatewayMcpServicesConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  include_browse: bool | IResolvable = None,
  page_size: typing.Union[int, float] = None,
  parent: str = None,
  provider_config: DataDatabricksAiGatewayMcpServicesProviderConfig = None,
  view: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.includeBrowse">include_browse</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_browse DataDatabricksAiGatewayMcpServices#include_browse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.view">view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.includeBrowse"></a>

```python
include_browse: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_browse DataDatabricksAiGatewayMcpServices#include_browse}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServicesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.view"></a>

```python
view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}.

---

### DataDatabricksAiGatewayMcpServicesMcpServices <a name="DataDatabricksAiGatewayMcpServicesMcpServices" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices(
  name: str,
  provider_config: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfig <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig(
  include_tool_selectors: typing.List[str] = None,
  rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits] = None,
  source_connection: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.includeToolSelectors">include_tool_selectors</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_tool_selectors DataDatabricksAiGatewayMcpServices#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.rateLimits">rate_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#rate_limits DataDatabricksAiGatewayMcpServices#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#source_connection DataDatabricksAiGatewayMcpServices#source_connection}. |

---

##### `include_tool_selectors`<sup>Optional</sup> <a name="include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.includeToolSelectors"></a>

```python
include_tool_selectors: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#include_tool_selectors DataDatabricksAiGatewayMcpServices#include_tool_selectors}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.rateLimits"></a>

```python
rate_limits: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#rate_limits DataDatabricksAiGatewayMcpServices#rate_limits}.

---

##### `source_connection`<sup>Optional</sup> <a name="source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.sourceConnection"></a>

```python
source_connection: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#source_connection DataDatabricksAiGatewayMcpServices#source_connection}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits(
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#key DataDatabricksAiGatewayMcpServices#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#renewal_period DataDatabricksAiGatewayMcpServices#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#principal DataDatabricksAiGatewayMcpServices#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#requests DataDatabricksAiGatewayMcpServices#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#request_tag_key DataDatabricksAiGatewayMcpServices#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#request_tag_value DataDatabricksAiGatewayMcpServices#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#tokens DataDatabricksAiGatewayMcpServices#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#key DataDatabricksAiGatewayMcpServices#key}.

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#renewal_period DataDatabricksAiGatewayMcpServices#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#principal DataDatabricksAiGatewayMcpServices#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#requests DataDatabricksAiGatewayMcpServices#requests}.

---

##### `request_tag_key`<sup>Optional</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#request_tag_key DataDatabricksAiGatewayMcpServices#request_tag_key}.

---

##### `request_tag_value`<sup>Optional</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#request_tag_value DataDatabricksAiGatewayMcpServices#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#tokens DataDatabricksAiGatewayMcpServices#tokens}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig <a name="DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

### DataDatabricksAiGatewayMcpServicesProviderConfig <a name="DataDatabricksAiGatewayMcpServicesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection">put_source_connection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetIncludeToolSelectors">reset_include_tool_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetSourceConnection">reset_source_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits"></a>

```python
def put_rate_limits(
  value: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]

---

##### `put_source_connection` <a name="put_source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection"></a>

```python
def put_source_connection(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}.

---

##### `reset_include_tool_selectors` <a name="reset_include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetIncludeToolSelectors"></a>

```python
def reset_include_tool_selectors() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_source_connection` <a name="reset_source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetSourceConnection"></a>

```python
def reset_source_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnection">source_connection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectorsInput">include_tool_selectors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimitsInput">rate_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnectionInput">source_connection_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectors">include_tool_selectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig">DataDatabricksAiGatewayMcpServicesMcpServicesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimits"></a>

```python
rate_limits: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList</a>

---

##### `source_connection`<sup>Required</sup> <a name="source_connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnection"></a>

```python
source_connection: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference</a>

---

##### `include_tool_selectors_input`<sup>Optional</sup> <a name="include_tool_selectors_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectorsInput"></a>

```python
include_tool_selectors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimitsInput"></a>

```python
rate_limits_input: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]

---

##### `source_connection_input`<sup>Optional</sup> <a name="source_connection_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnectionInput"></a>

```python
source_connection_input: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

---

##### `include_tool_selectors`<sup>Required</sup> <a name="include_tool_selectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectors"></a>

```python
include_tool_selectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiGatewayMcpServicesMcpServicesConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig">DataDatabricksAiGatewayMcpServicesMcpServicesConfig</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>]

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagKey">reset_request_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagValue">reset_request_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_request_tag_key` <a name="reset_request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```python
def reset_request_tag_key() -> None
```

##### `reset_request_tag_value` <a name="reset_request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```python
def reset_request_tag_value() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriodInput">renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKeyInput">request_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValueInput">request_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `renewal_period_input`<sup>Optional</sup> <a name="renewal_period_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```python
renewal_period_input: str
```

- *Type:* str

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key_input`<sup>Optional</sup> <a name="request_tag_key_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```python
request_tag_key_input: str
```

- *Type:* str

---

##### `request_tag_value_input`<sup>Optional</sup> <a name="request_tag_value_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```python
request_tag_value_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key`<sup>Required</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

---

##### `request_tag_value`<sup>Required</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesList <a name="DataDatabricksAiGatewayMcpServicesMcpServicesList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAiGatewayMcpServicesMcpServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>]

---


### DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.browseOnly">browse_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.browseOnly"></a>

```python
browse_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.config"></a>

```python
config: DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAiGatewayMcpServicesMcpServices
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

---


### DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_ai_gateway_mcp_services

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAiGatewayMcpServicesProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

---




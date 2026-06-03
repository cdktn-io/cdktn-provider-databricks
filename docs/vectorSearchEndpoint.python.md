# `vectorSearchEndpoint` Submodule <a name="`vectorSearchEndpoint` Submodule" id="@cdktn/provider-databricks.vectorSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VectorSearchEndpoint <a name="VectorSearchEndpoint" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint databricks_vector_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_type: str,
  name: str,
  budget_policy_id: str = None,
  id: str = None,
  provider_config: VectorSearchEndpointProviderConfig = None,
  scaling_info: VectorSearchEndpointScalingInfo = None,
  timeouts: VectorSearchEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scalingInfo">scaling_info</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | scaling_info block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.budgetPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#provider_config VectorSearchEndpoint#provider_config}

---

##### `scaling_info`<sup>Optional</sup> <a name="scaling_info" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.scalingInfo"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

scaling_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#scaling_info VectorSearchEndpoint#scaling_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo">put_scaling_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo">reset_scaling_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}.

---

##### `put_scaling_info` <a name="put_scaling_info" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo"></a>

```python
def put_scaling_info(
  requested_target_qps: typing.Union[int, float] = None,
  state: str = None
) -> None
```

###### `requested_target_qps`<sup>Optional</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo.parameter.requestedTargetQps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putScalingInfo.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}.

---

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_scaling_info` <a name="reset_scaling_info" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetScalingInfo"></a>

```python
def reset_scaling_info() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a VectorSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VectorSearchEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VectorSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VectorSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp">creation_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId">effective_budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus">endpoint_status</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser">last_updated_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes">num_indexes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo">scaling_info</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput">scaling_info_input</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creationTimestamp"></a>

```python
creation_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `effective_budget_policy_id`<sup>Required</sup> <a name="effective_budget_policy_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```python
effective_budget_policy_id: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_status`<sup>Required</sup> <a name="endpoint_status" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointStatus"></a>

```python
endpoint_status: VectorSearchEndpointEndpointStatusList
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList">VectorSearchEndpointEndpointStatusList</a>

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_user`<sup>Required</sup> <a name="last_updated_user" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.lastUpdatedUser"></a>

```python
last_updated_user: str
```

- *Type:* str

---

##### `num_indexes`<sup>Required</sup> <a name="num_indexes" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.numIndexes"></a>

```python
num_indexes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfig"></a>

```python
provider_config: VectorSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference">VectorSearchEndpointProviderConfigOutputReference</a>

---

##### `scaling_info`<sup>Required</sup> <a name="scaling_info" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfo"></a>

```python
scaling_info: VectorSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference">VectorSearchEndpointScalingInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeouts"></a>

```python
timeouts: VectorSearchEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference">VectorSearchEndpointTimeoutsOutputReference</a>

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.providerConfigInput"></a>

```python
provider_config_input: VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---

##### `scaling_info_input`<sup>Optional</sup> <a name="scaling_info_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.scalingInfoInput"></a>

```python
scaling_info_input: VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | VectorSearchEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VectorSearchEndpointConfig <a name="VectorSearchEndpointConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_type: str,
  name: str,
  budget_policy_id: str = None,
  id: str = None,
  provider_config: VectorSearchEndpointProviderConfig = None,
  scaling_info: VectorSearchEndpointScalingInfo = None,
  timeouts: VectorSearchEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo">scaling_info</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | scaling_info block. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#endpoint_type VectorSearchEndpoint#endpoint_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#name VectorSearchEndpoint#name}.

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#budget_policy_id VectorSearchEndpoint#budget_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#id VectorSearchEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.providerConfig"></a>

```python
provider_config: VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#provider_config VectorSearchEndpoint#provider_config}

---

##### `scaling_info`<sup>Optional</sup> <a name="scaling_info" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.scalingInfo"></a>

```python
scaling_info: VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

scaling_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#scaling_info VectorSearchEndpoint#scaling_info}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointConfig.property.timeouts"></a>

```python
timeouts: VectorSearchEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#timeouts VectorSearchEndpoint#timeouts}

---

### VectorSearchEndpointEndpointStatus <a name="VectorSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointEndpointStatus()
```


### VectorSearchEndpointProviderConfig <a name="VectorSearchEndpointProviderConfig" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#workspace_id VectorSearchEndpoint#workspace_id}.

---

### VectorSearchEndpointScalingInfo <a name="VectorSearchEndpointScalingInfo" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointScalingInfo(
  requested_target_qps: typing.Union[int, float] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}. |

---

##### `requested_target_qps`<sup>Optional</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#requested_target_qps VectorSearchEndpoint#requested_target_qps}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#state VectorSearchEndpoint#state}.

---

### VectorSearchEndpointTimeouts <a name="VectorSearchEndpointTimeouts" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/vector_search_endpoint#create VectorSearchEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### VectorSearchEndpointEndpointStatusList <a name="VectorSearchEndpointEndpointStatusList" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VectorSearchEndpointEndpointStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VectorSearchEndpointEndpointStatusOutputReference <a name="VectorSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointEndpointStatus">VectorSearchEndpointEndpointStatus</a>

---


### VectorSearchEndpointProviderConfigOutputReference <a name="VectorSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointProviderConfig">VectorSearchEndpointProviderConfig</a>

---


### VectorSearchEndpointScalingInfoOutputReference <a name="VectorSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">reset_requested_target_qps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_requested_target_qps` <a name="reset_requested_target_qps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```python
def reset_requested_target_qps() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requested_target_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `requested_target_qps_input`<sup>Optional</sup> <a name="requested_target_qps_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```python
requested_target_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `requested_target_qps`<sup>Required</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```python
internal_value: VectorSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointScalingInfo">VectorSearchEndpointScalingInfo</a>

---


### VectorSearchEndpointTimeoutsOutputReference <a name="VectorSearchEndpointTimeoutsOutputReference" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import vector_search_endpoint

vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | VectorSearchEndpointTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.vectorSearchEndpoint.VectorSearchEndpointTimeouts">VectorSearchEndpointTimeouts</a>

---




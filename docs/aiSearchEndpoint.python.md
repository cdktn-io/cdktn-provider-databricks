# `aiSearchEndpoint` Submodule <a name="`aiSearchEndpoint` Submodule" id="@cdktn/provider-databricks.aiSearchEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchEndpoint <a name="AiSearchEndpoint" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint databricks_ai_search_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpoint(
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
  parent: str,
  budget_policy_id: str = None,
  custom_tags: IResolvable | typing.List[AiSearchEndpointCustomTags] = None,
  endpoint_id: str = None,
  provider_config: AiSearchEndpointProviderConfig = None,
  replica_count: typing.Union[int, float] = None,
  target_qps: typing.Union[int, float] = None,
  usage_policy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.customTags">custom_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.targetQps">target_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}.

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.budgetPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.customTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}.

---

##### `endpoint_id`<sup>Optional</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}.

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.replicaCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}.

---

##### `target_qps`<sup>Optional</sup> <a name="target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.targetQps"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}.

---

##### `usage_policy_id`<sup>Optional</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.Initializer.parameter.usagePolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags">put_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId">reset_budget_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId">reset_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps">reset_target_qps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId">reset_usage_policy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_tags` <a name="put_custom_tags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags"></a>

```python
def put_custom_tags(
  value: IResolvable | typing.List[AiSearchEndpointCustomTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putCustomTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}.

---

##### `reset_budget_policy_id` <a name="reset_budget_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetBudgetPolicyId"></a>

```python
def reset_budget_policy_id() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_endpoint_id` <a name="reset_endpoint_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetEndpointId"></a>

```python
def reset_endpoint_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_target_qps` <a name="reset_target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetTargetQps"></a>

```python
def reset_target_qps() -> None
```

##### `reset_usage_policy_id` <a name="reset_usage_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.resetUsagePolicyId"></a>

```python
def reset_usage_policy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiSearchEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiSearchEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiSearchEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags">custom_tags</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId">effective_budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus">endpoint_status</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount">index_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser">last_updated_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo">scaling_info</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo">throughput_info</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput">budget_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput">custom_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput">target_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput">usage_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps">target_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTags"></a>

```python
custom_tags: AiSearchEndpointCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList">AiSearchEndpointCustomTagsList</a>

---

##### `effective_budget_policy_id`<sup>Required</sup> <a name="effective_budget_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.effectiveBudgetPolicyId"></a>

```python
effective_budget_policy_id: str
```

- *Type:* str

---

##### `endpoint_status`<sup>Required</sup> <a name="endpoint_status" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointStatus"></a>

```python
endpoint_status: AiSearchEndpointEndpointStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference">AiSearchEndpointEndpointStatusOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_count`<sup>Required</sup> <a name="index_count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.indexCount"></a>

```python
index_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_updated_user`<sup>Required</sup> <a name="last_updated_user" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.lastUpdatedUser"></a>

```python
last_updated_user: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfig"></a>

```python
provider_config: AiSearchEndpointProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference">AiSearchEndpointProviderConfigOutputReference</a>

---

##### `scaling_info`<sup>Required</sup> <a name="scaling_info" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.scalingInfo"></a>

```python
scaling_info: AiSearchEndpointScalingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference">AiSearchEndpointScalingInfoOutputReference</a>

---

##### `throughput_info`<sup>Required</sup> <a name="throughput_info" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.throughputInfo"></a>

```python
throughput_info: AiSearchEndpointThroughputInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference">AiSearchEndpointThroughputInfoOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `budget_policy_id_input`<sup>Optional</sup> <a name="budget_policy_id_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyIdInput"></a>

```python
budget_policy_id_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.customTagsInput"></a>

```python
custom_tags_input: IResolvable | typing.List[AiSearchEndpointCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | AiSearchEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_qps_input`<sup>Optional</sup> <a name="target_qps_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQpsInput"></a>

```python
target_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_policy_id_input`<sup>Optional</sup> <a name="usage_policy_id_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyIdInput"></a>

```python
usage_policy_id_input: str
```

- *Type:* str

---

##### `budget_policy_id`<sup>Required</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_qps`<sup>Required</sup> <a name="target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.targetQps"></a>

```python
target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `usage_policy_id`<sup>Required</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchEndpointConfig <a name="AiSearchEndpointConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  endpoint_type: str,
  parent: str,
  budget_policy_id: str = None,
  custom_tags: IResolvable | typing.List[AiSearchEndpointCustomTags] = None,
  endpoint_id: str = None,
  provider_config: AiSearchEndpointProviderConfig = None,
  replica_count: typing.Union[int, float] = None,
  target_qps: typing.Union[int, float] = None,
  usage_policy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId">budget_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags">custom_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps">target_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId">usage_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_type AiSearchEndpoint#endpoint_type}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#parent AiSearchEndpoint#parent}.

---

##### `budget_policy_id`<sup>Optional</sup> <a name="budget_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.budgetPolicyId"></a>

```python
budget_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#budget_policy_id AiSearchEndpoint#budget_policy_id}.

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.customTags"></a>

```python
custom_tags: IResolvable | typing.List[AiSearchEndpointCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#custom_tags AiSearchEndpoint#custom_tags}.

---

##### `endpoint_id`<sup>Optional</sup> <a name="endpoint_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#endpoint_id AiSearchEndpoint#endpoint_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.providerConfig"></a>

```python
provider_config: AiSearchEndpointProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#provider_config AiSearchEndpoint#provider_config}.

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#replica_count AiSearchEndpoint#replica_count}.

---

##### `target_qps`<sup>Optional</sup> <a name="target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.targetQps"></a>

```python
target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#target_qps AiSearchEndpoint#target_qps}.

---

##### `usage_policy_id`<sup>Optional</sup> <a name="usage_policy_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointConfig.property.usagePolicyId"></a>

```python
usage_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#usage_policy_id AiSearchEndpoint#usage_policy_id}.

---

### AiSearchEndpointCustomTags <a name="AiSearchEndpointCustomTags" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointCustomTags(
  key: str,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#key AiSearchEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#value AiSearchEndpoint#value}.

---

### AiSearchEndpointEndpointStatus <a name="AiSearchEndpointEndpointStatus" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointEndpointStatus()
```


### AiSearchEndpointProviderConfig <a name="AiSearchEndpointProviderConfig" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#workspace_id AiSearchEndpoint#workspace_id}.

---

### AiSearchEndpointScalingInfo <a name="AiSearchEndpointScalingInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointScalingInfo(
  requested_target_qps: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}. |

---

##### `requested_target_qps`<sup>Optional</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_target_qps AiSearchEndpoint#requested_target_qps}.

---

### AiSearchEndpointThroughputInfo <a name="AiSearchEndpointThroughputInfo" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointThroughputInfo(
  maximum_concurrency_allowed: typing.Union[int, float] = None,
  minimal_concurrency_allowed: typing.Union[int, float] = None,
  requested_concurrency: typing.Union[int, float] = None,
  requested_num_replicas: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed">maximum_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed">minimal_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency">requested_concurrency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas">requested_num_replicas</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}. |

---

##### `maximum_concurrency_allowed`<sup>Optional</sup> <a name="maximum_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.maximumConcurrencyAllowed"></a>

```python
maximum_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#maximum_concurrency_allowed AiSearchEndpoint#maximum_concurrency_allowed}.

---

##### `minimal_concurrency_allowed`<sup>Optional</sup> <a name="minimal_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.minimalConcurrencyAllowed"></a>

```python
minimal_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#minimal_concurrency_allowed AiSearchEndpoint#minimal_concurrency_allowed}.

---

##### `requested_concurrency`<sup>Optional</sup> <a name="requested_concurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedConcurrency"></a>

```python
requested_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_concurrency AiSearchEndpoint#requested_concurrency}.

---

##### `requested_num_replicas`<sup>Optional</sup> <a name="requested_num_replicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo.property.requestedNumReplicas"></a>

```python
requested_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.130.0/docs/resources/ai_search_endpoint#requested_num_replicas AiSearchEndpoint#requested_num_replicas}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiSearchEndpointCustomTagsList <a name="AiSearchEndpointCustomTagsList" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointCustomTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiSearchEndpointCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiSearchEndpointCustomTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>]

---


### AiSearchEndpointCustomTagsOutputReference <a name="AiSearchEndpointCustomTagsOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchEndpointCustomTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointCustomTags">AiSearchEndpointCustomTags</a>

---


### AiSearchEndpointEndpointStatusOutputReference <a name="AiSearchEndpointEndpointStatusOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatusOutputReference.property.internalValue"></a>

```python
internal_value: AiSearchEndpointEndpointStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointEndpointStatus">AiSearchEndpointEndpointStatus</a>

---


### AiSearchEndpointProviderConfigOutputReference <a name="AiSearchEndpointProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiSearchEndpointProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointProviderConfig">AiSearchEndpointProviderConfig</a>

---


### AiSearchEndpointScalingInfoOutputReference <a name="AiSearchEndpointScalingInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps">reset_requested_target_qps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_requested_target_qps` <a name="reset_requested_target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.resetRequestedTargetQps"></a>

```python
def reset_requested_target_qps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput">requested_target_qps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps">requested_target_qps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `requested_target_qps_input`<sup>Optional</sup> <a name="requested_target_qps_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```python
requested_target_qps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_target_qps`<sup>Required</sup> <a name="requested_target_qps" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.requestedTargetQps"></a>

```python
requested_target_qps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfoOutputReference.property.internalValue"></a>

```python
internal_value: AiSearchEndpointScalingInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointScalingInfo">AiSearchEndpointScalingInfo</a>

---


### AiSearchEndpointThroughputInfoOutputReference <a name="AiSearchEndpointThroughputInfoOutputReference" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_search_endpoint

aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">reset_maximum_concurrency_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">reset_minimal_concurrency_allowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency">reset_requested_concurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas">reset_requested_num_replicas</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_concurrency_allowed` <a name="reset_maximum_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```python
def reset_maximum_concurrency_allowed() -> None
```

##### `reset_minimal_concurrency_allowed` <a name="reset_minimal_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```python
def reset_minimal_concurrency_allowed() -> None
```

##### `reset_requested_concurrency` <a name="reset_requested_concurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```python
def reset_requested_concurrency() -> None
```

##### `reset_requested_num_replicas` <a name="reset_requested_num_replicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```python
def reset_requested_num_replicas() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage">change_request_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState">change_request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency">current_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">current_concurrency_utilization_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas">current_num_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">maximum_concurrency_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">minimal_concurrency_allowed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput">requested_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput">requested_num_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed">maximum_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed">minimal_concurrency_allowed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency">requested_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas">requested_num_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_request_message`<sup>Required</sup> <a name="change_request_message" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestMessage"></a>

```python
change_request_message: str
```

- *Type:* str

---

##### `change_request_state`<sup>Required</sup> <a name="change_request_state" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.changeRequestState"></a>

```python
change_request_state: str
```

- *Type:* str

---

##### `current_concurrency`<sup>Required</sup> <a name="current_concurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrency"></a>

```python
current_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_concurrency_utilization_percentage`<sup>Required</sup> <a name="current_concurrency_utilization_percentage" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```python
current_concurrency_utilization_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_num_replicas`<sup>Required</sup> <a name="current_num_replicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.currentNumReplicas"></a>

```python
current_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency_allowed_input`<sup>Optional</sup> <a name="maximum_concurrency_allowed_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```python
maximum_concurrency_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_concurrency_allowed_input`<sup>Optional</sup> <a name="minimal_concurrency_allowed_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```python
minimal_concurrency_allowed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_concurrency_input`<sup>Optional</sup> <a name="requested_concurrency_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```python
requested_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_num_replicas_input`<sup>Optional</sup> <a name="requested_num_replicas_input" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```python
requested_num_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_concurrency_allowed`<sup>Required</sup> <a name="maximum_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```python
maximum_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimal_concurrency_allowed`<sup>Required</sup> <a name="minimal_concurrency_allowed" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```python
minimal_concurrency_allowed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_concurrency`<sup>Required</sup> <a name="requested_concurrency" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedConcurrency"></a>

```python
requested_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `requested_num_replicas`<sup>Required</sup> <a name="requested_num_replicas" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```python
requested_num_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfoOutputReference.property.internalValue"></a>

```python
internal_value: AiSearchEndpointThroughputInfo
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchEndpoint.AiSearchEndpointThroughputInfo">AiSearchEndpointThroughputInfo</a>

---




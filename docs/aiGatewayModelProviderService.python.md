# `aiGatewayModelProviderService` Submodule <a name="`aiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.aiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayModelProviderService <a name="AiGatewayModelProviderService" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_provider_service_id: str,
  parent: str,
  comment: str = None,
  config: AiGatewayModelProviderServiceConfigA = None,
  owner: str = None,
  provider_config: AiGatewayModelProviderServiceProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.modelProviderServiceId">model_provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_provider_service_id`<sup>Required</sup> <a name="model_provider_service_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.modelProviderServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig"></a>

```python
def put_config(
  allow_all_targets: bool | IResolvable = None,
  amazon_bedrock: AiGatewayModelProviderServiceConfigAmazonBedrock = None,
  anthropic: AiGatewayModelProviderServiceConfigAnthropic = None,
  azure_openai: AiGatewayModelProviderServiceConfigAzureOpenai = None,
  custom: AiGatewayModelProviderServiceConfigCustom = None,
  forward_headers: bool | IResolvable = None,
  forward_query_parameters: bool | IResolvable = None,
  forward_unmanaged_paths: bool | IResolvable = None,
  gemini_enterprise: AiGatewayModelProviderServiceConfigGeminiEnterprise = None,
  inference_table: AiGatewayModelProviderServiceConfigInferenceTable = None,
  microsoft_foundry: AiGatewayModelProviderServiceConfigMicrosoftFoundry = None,
  openai: AiGatewayModelProviderServiceConfigOpenai = None,
  provider_type: str = None,
  rate_limits: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits] = None,
  targets: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets] = None
) -> None
```

###### `allow_all_targets`<sup>Optional</sup> <a name="allow_all_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.allowAllTargets"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}.

---

###### `amazon_bedrock`<sup>Optional</sup> <a name="amazon_bedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.amazonBedrock"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}.

---

###### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.anthropic"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}.

---

###### `azure_openai`<sup>Optional</sup> <a name="azure_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.azureOpenai"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}.

---

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}.

---

###### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.forwardHeaders"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}.

---

###### `forward_query_parameters`<sup>Optional</sup> <a name="forward_query_parameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.forwardQueryParameters"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}.

---

###### `forward_unmanaged_paths`<sup>Optional</sup> <a name="forward_unmanaged_paths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.forwardUnmanagedPaths"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}.

---

###### `gemini_enterprise`<sup>Optional</sup> <a name="gemini_enterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.geminiEnterprise"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}.

---

###### `inference_table`<sup>Optional</sup> <a name="inference_table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.inferenceTable"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}.

---

###### `microsoft_foundry`<sup>Optional</sup> <a name="microsoft_foundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.microsoftFoundry"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}.

---

###### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.openai"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}.

---

###### `provider_type`<sup>Optional</sup> <a name="provider_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.providerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}.

---

###### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.rateLimits"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}.

---

###### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putConfig.parameter.targets"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_config` <a name="reset_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiGatewayModelProviderService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner">effective_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput">model_provider_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId">model_provider_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.config"></a>

```python
config: AiGatewayModelProviderServiceConfigAOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference">AiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_owner`<sup>Required</sup> <a name="effective_owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.effectiveOwner"></a>

```python
effective_owner: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfig"></a>

```python
provider_config: AiGatewayModelProviderServiceProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference">AiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.configInput"></a>

```python
config_input: IResolvable | AiGatewayModelProviderServiceConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---

##### `model_provider_service_id_input`<sup>Optional</sup> <a name="model_provider_service_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceIdInput"></a>

```python
model_provider_service_id_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | AiGatewayModelProviderServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `model_provider_service_id`<sup>Required</sup> <a name="model_provider_service_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.modelProviderServiceId"></a>

```python
model_provider_service_id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayModelProviderServiceConfig <a name="AiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  model_provider_service_id: str,
  parent: str,
  comment: str = None,
  config: AiGatewayModelProviderServiceConfigA = None,
  owner: str = None,
  provider_config: AiGatewayModelProviderServiceProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId">model_provider_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `model_provider_service_id`<sup>Required</sup> <a name="model_provider_service_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.modelProviderServiceId"></a>

```python
model_provider_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model_provider_service_id AiGatewayModelProviderService#model_provider_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#comment AiGatewayModelProviderService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.config"></a>

```python
config: AiGatewayModelProviderServiceConfigA
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#config AiGatewayModelProviderService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#owner AiGatewayModelProviderService#owner}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```python
provider_config: AiGatewayModelProviderServiceProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_config AiGatewayModelProviderService#provider_config}.

---

### AiGatewayModelProviderServiceConfigA <a name="AiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA(
  allow_all_targets: bool | IResolvable = None,
  amazon_bedrock: AiGatewayModelProviderServiceConfigAmazonBedrock = None,
  anthropic: AiGatewayModelProviderServiceConfigAnthropic = None,
  azure_openai: AiGatewayModelProviderServiceConfigAzureOpenai = None,
  custom: AiGatewayModelProviderServiceConfigCustom = None,
  forward_headers: bool | IResolvable = None,
  forward_query_parameters: bool | IResolvable = None,
  forward_unmanaged_paths: bool | IResolvable = None,
  gemini_enterprise: AiGatewayModelProviderServiceConfigGeminiEnterprise = None,
  inference_table: AiGatewayModelProviderServiceConfigInferenceTable = None,
  microsoft_foundry: AiGatewayModelProviderServiceConfigMicrosoftFoundry = None,
  openai: AiGatewayModelProviderServiceConfigOpenai = None,
  provider_type: str = None,
  rate_limits: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits] = None,
  targets: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets">allow_all_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock">amazon_bedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai">azure_openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders">forward_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">forward_query_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">forward_unmanaged_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise">gemini_enterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable">inference_table</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry">microsoft_foundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType">provider_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits">rate_limits</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets">targets</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}. |

---

##### `allow_all_targets`<sup>Optional</sup> <a name="allow_all_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```python
allow_all_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#allow_all_targets AiGatewayModelProviderService#allow_all_targets}.

---

##### `amazon_bedrock`<sup>Optional</sup> <a name="amazon_bedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```python
amazon_bedrock: AiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#amazon_bedrock AiGatewayModelProviderService#amazon_bedrock}.

---

##### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```python
anthropic: AiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#anthropic AiGatewayModelProviderService#anthropic}.

---

##### `azure_openai`<sup>Optional</sup> <a name="azure_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```python
azure_openai: AiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#azure_openai AiGatewayModelProviderService#azure_openai}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.custom"></a>

```python
custom: AiGatewayModelProviderServiceConfigCustom
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#custom AiGatewayModelProviderService#custom}.

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```python
forward_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_headers AiGatewayModelProviderService#forward_headers}.

---

##### `forward_query_parameters`<sup>Optional</sup> <a name="forward_query_parameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```python
forward_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_query_parameters AiGatewayModelProviderService#forward_query_parameters}.

---

##### `forward_unmanaged_paths`<sup>Optional</sup> <a name="forward_unmanaged_paths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```python
forward_unmanaged_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#forward_unmanaged_paths AiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `gemini_enterprise`<sup>Optional</sup> <a name="gemini_enterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```python
gemini_enterprise: AiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#gemini_enterprise AiGatewayModelProviderService#gemini_enterprise}.

---

##### `inference_table`<sup>Optional</sup> <a name="inference_table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```python
inference_table: AiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#inference_table AiGatewayModelProviderService#inference_table}.

---

##### `microsoft_foundry`<sup>Optional</sup> <a name="microsoft_foundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```python
microsoft_foundry: AiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#microsoft_foundry AiGatewayModelProviderService#microsoft_foundry}.

---

##### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.openai"></a>

```python
openai: AiGatewayModelProviderServiceConfigOpenai
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#openai AiGatewayModelProviderService#openai}.

---

##### `provider_type`<sup>Optional</sup> <a name="provider_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#provider_type AiGatewayModelProviderService#provider_type}.

---

##### `rate_limits`<sup>Optional</sup> <a name="rate_limits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```python
rate_limits: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#rate_limits AiGatewayModelProviderService#rate_limits}.

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA.property.targets"></a>

```python
targets: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#targets AiGatewayModelProviderService#targets}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrock <a name="AiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock(
  direct: AiGatewayModelProviderServiceConfigAmazonBedrockDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect(
  aws_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey = None,
  region: str = None,
  service_credential: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```python
aws_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey(
  access_key_id: str = None,
  secret_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">secret_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}. |

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}.

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```python
secret_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigAnthropic <a name="AiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic(
  direct: AiGatewayModelProviderServiceConfigAnthropicDirect = None,
  relayed: AiGatewayModelProviderServiceConfigAnthropicRelayed = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `relayed`<sup>Optional</sup> <a name="relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```python
relayed: AiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirect <a name="AiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect(
  api_key: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

### AiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAnthropicRelayed <a name="AiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed(
  plan_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">plan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}. |

---

##### `plan_type`<sup>Optional</sup> <a name="plan_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}.

---

### AiGatewayModelProviderServiceConfigAzureOpenai <a name="AiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai(
  direct: AiGatewayModelProviderServiceConfigAzureOpenaiDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect(
  api_key: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal = None,
  service_credential: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```python
entra_service_principal: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal(
  client_id: str = None,
  client_secret: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```python
client_secret: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigCustom <a name="AiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom(
  direct: AiGatewayModelProviderServiceConfigCustomDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigCustomDirect <a name="AiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect(
  api_key: AiGatewayModelProviderServiceConfigCustomDirectApiKey = None,
  base_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

### AiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterprise <a name="AiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise(
  direct: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect(
  api_key: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey = None,
  project_id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigInferenceTable <a name="AiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable(
  parent: str,
  disabled: bool | IResolvable = None,
  table_name_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}. |

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}.

---

##### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry(
  direct: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect(
  api_key: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal = None,
  service_credential: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```python
entra_service_principal: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

##### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal(
  client_id: str = None,
  client_secret: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}. |

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```python
client_secret: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

### AiGatewayModelProviderServiceConfigOpenai <a name="AiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai(
  direct: AiGatewayModelProviderServiceConfigOpenaiDirect = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}. |

---

##### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirect <a name="AiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect(
  api_key: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey = None,
  base_url: str = None,
  organization: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">base_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}.

---

### AiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey(
  plaintext: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">plaintext</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}. |

---

##### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

### AiGatewayModelProviderServiceConfigRateLimits <a name="AiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits(
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
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#key AiGatewayModelProviderService#key}.

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#renewal_period AiGatewayModelProviderService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#principal AiGatewayModelProviderService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#requests AiGatewayModelProviderService#requests}.

---

##### `request_tag_key`<sup>Optional</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_key AiGatewayModelProviderService#request_tag_key}.

---

##### `request_tag_value`<sup>Optional</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#request_tag_value AiGatewayModelProviderService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tokens AiGatewayModelProviderService#tokens}.

---

### AiGatewayModelProviderServiceConfigTargets <a name="AiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets(
  model: str,
  native_api_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">native_api_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#model AiGatewayModelProviderService#model}.

---

##### `native_api_types`<sup>Optional</sup> <a name="native_api_types" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```python
native_api_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#native_api_types AiGatewayModelProviderService#native_api_types}.

---

### AiGatewayModelProviderServiceProviderConfig <a name="AiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#workspace_id AiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">put_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_secret_access_key` <a name="put_secret_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```python
def put_secret_access_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">put_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">reset_aws_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_access_key` <a name="put_aws_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```python
def put_aws_access_key(
  access_key_id: str = None,
  secret_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey = None
) -> None
```

###### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#access_key_id AiGatewayModelProviderService#access_key_id}.

---

###### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.secretAccessKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#secret_access_key AiGatewayModelProviderService#secret_access_key}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

##### `reset_aws_access_key` <a name="reset_aws_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```python
def reset_aws_access_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">aws_access_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">aws_access_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_access_key`<sup>Required</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```python
aws_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `aws_access_key_input`<sup>Optional</sup> <a name="aws_access_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```python
aws_access_key_input: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```python
def put_direct(
  aws_access_key: AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey = None,
  region: str = None,
  service_credential: AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential = None
) -> None
```

###### `aws_access_key`<sup>Optional</sup> <a name="aws_access_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.awsAccessKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">AiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#aws_access_key AiGatewayModelProviderService#aws_access_key}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">AiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrockDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigAnthropicDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---


### AiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">put_relayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">reset_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">reset_relayed</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigAnthropicDirectApiKey = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectApiKey">AiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

##### `put_relayed` <a name="put_relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```python
def put_relayed(
  plan_type: str = None
) -> None
```

###### `plan_type`<sup>Optional</sup> <a name="plan_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.planType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plan_type AiGatewayModelProviderService#plan_type}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```

##### `reset_relayed` <a name="reset_relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```python
def reset_relayed() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">relayed</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">relayed_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">AiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `relayed`<sup>Required</sup> <a name="relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```python
relayed: AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigAnthropicDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `relayed_input`<sup>Optional</sup> <a name="relayed_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```python
relayed_input: IResolvable | AiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---


### AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">reset_plan_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plan_type` <a name="reset_plan_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```python
def reset_plan_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">plan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plan_type_input`<sup>Optional</sup> <a name="plan_type_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```python
plan_type_input: str
```

- *Type:* str

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAnthropicRelayed
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---


### AiGatewayModelProviderServiceConfigAOutputReference <a name="AiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">put_amazon_bedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">put_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">put_azure_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">put_gemini_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">put_inference_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">put_microsoft_foundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai">put_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">put_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets">put_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">reset_allow_all_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">reset_amazon_bedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">reset_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">reset_azure_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">reset_forward_query_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">reset_forward_unmanaged_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">reset_gemini_enterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">reset_inference_table</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">reset_microsoft_foundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">reset_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">reset_provider_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">reset_rate_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets">reset_targets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_bedrock` <a name="put_amazon_bedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```python
def put_amazon_bedrock(
  direct: AiGatewayModelProviderServiceConfigAmazonBedrockDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockDirect">AiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_anthropic` <a name="put_anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```python
def put_anthropic(
  direct: AiGatewayModelProviderServiceConfigAnthropicDirect = None,
  relayed: AiGatewayModelProviderServiceConfigAnthropicRelayed = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicDirect">AiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

###### `relayed`<sup>Optional</sup> <a name="relayed" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.relayed"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicRelayed">AiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#relayed AiGatewayModelProviderService#relayed}.

---

##### `put_azure_openai` <a name="put_azure_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```python
def put_azure_openai(
  direct: AiGatewayModelProviderServiceConfigAzureOpenaiDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_custom` <a name="put_custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```python
def put_custom(
  direct: AiGatewayModelProviderServiceConfigCustomDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_gemini_enterprise` <a name="put_gemini_enterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```python
def put_gemini_enterprise(
  direct: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_inference_table` <a name="put_inference_table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```python
def put_inference_table(
  parent: str,
  disabled: bool | IResolvable = None,
  table_name_prefix: str = None
) -> None
```

###### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#parent AiGatewayModelProviderService#parent}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#disabled AiGatewayModelProviderService#disabled}.

---

###### `table_name_prefix`<sup>Optional</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.tableNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#table_name_prefix AiGatewayModelProviderService#table_name_prefix}.

---

##### `put_microsoft_foundry` <a name="put_microsoft_foundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```python
def put_microsoft_foundry(
  direct: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_openai` <a name="put_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```python
def put_openai(
  direct: AiGatewayModelProviderServiceConfigOpenaiDirect = None
) -> None
```

###### `direct`<sup>Optional</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.direct"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#direct AiGatewayModelProviderService#direct}.

---

##### `put_rate_limits` <a name="put_rate_limits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```python
def put_rate_limits(
  value: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]

---

##### `put_targets` <a name="put_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```python
def put_targets(
  value: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]

---

##### `reset_allow_all_targets` <a name="reset_allow_all_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```python
def reset_allow_all_targets() -> None
```

##### `reset_amazon_bedrock` <a name="reset_amazon_bedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```python
def reset_amazon_bedrock() -> None
```

##### `reset_anthropic` <a name="reset_anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```python
def reset_anthropic() -> None
```

##### `reset_azure_openai` <a name="reset_azure_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```python
def reset_azure_openai() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_forward_query_parameters` <a name="reset_forward_query_parameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```python
def reset_forward_query_parameters() -> None
```

##### `reset_forward_unmanaged_paths` <a name="reset_forward_unmanaged_paths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```python
def reset_forward_unmanaged_paths() -> None
```

##### `reset_gemini_enterprise` <a name="reset_gemini_enterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```python
def reset_gemini_enterprise() -> None
```

##### `reset_inference_table` <a name="reset_inference_table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```python
def reset_inference_table() -> None
```

##### `reset_microsoft_foundry` <a name="reset_microsoft_foundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```python
def reset_microsoft_foundry() -> None
```

##### `reset_openai` <a name="reset_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```python
def reset_openai() -> None
```

##### `reset_provider_type` <a name="reset_provider_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```python
def reset_provider_type() -> None
```

##### `reset_rate_limits` <a name="reset_rate_limits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```python
def reset_rate_limits() -> None
```

##### `reset_targets` <a name="reset_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```python
def reset_targets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">amazon_bedrock</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">azure_openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">gemini_enterprise</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">inference_table</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">microsoft_foundry</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">rate_limits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">allow_all_targets_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">amazon_bedrock_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">anthropic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">azure_openai_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">forward_query_parameters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">forward_unmanaged_paths_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">gemini_enterprise_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">inference_table_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">microsoft_foundry_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">openai_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">provider_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">rate_limits_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">targets_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">allow_all_targets</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">forward_query_parameters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">forward_unmanaged_paths</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType">provider_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_bedrock`<sup>Required</sup> <a name="amazon_bedrock" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```python
amazon_bedrock: AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">AiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `anthropic`<sup>Required</sup> <a name="anthropic" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```python
anthropic: AiGatewayModelProviderServiceConfigAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropicOutputReference">AiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `azure_openai`<sup>Required</sup> <a name="azure_openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```python
azure_openai: AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```python
custom: AiGatewayModelProviderServiceConfigCustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference">AiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `gemini_enterprise`<sup>Required</sup> <a name="gemini_enterprise" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```python
gemini_enterprise: AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `inference_table`<sup>Required</sup> <a name="inference_table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```python
inference_table: AiGatewayModelProviderServiceConfigInferenceTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference">AiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `microsoft_foundry`<sup>Required</sup> <a name="microsoft_foundry" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```python
microsoft_foundry: AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `openai`<sup>Required</sup> <a name="openai" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```python
openai: AiGatewayModelProviderServiceConfigOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference">AiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `rate_limits`<sup>Required</sup> <a name="rate_limits" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```python
rate_limits: AiGatewayModelProviderServiceConfigRateLimitsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList">AiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```python
targets: AiGatewayModelProviderServiceConfigTargetsList
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList">AiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `allow_all_targets_input`<sup>Optional</sup> <a name="allow_all_targets_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```python
allow_all_targets_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `amazon_bedrock_input`<sup>Optional</sup> <a name="amazon_bedrock_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```python
amazon_bedrock_input: IResolvable | AiGatewayModelProviderServiceConfigAmazonBedrock
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAmazonBedrock">AiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `anthropic_input`<sup>Optional</sup> <a name="anthropic_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```python
anthropic_input: IResolvable | AiGatewayModelProviderServiceConfigAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAnthropic">AiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `azure_openai_input`<sup>Optional</sup> <a name="azure_openai_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```python
azure_openai_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```python
custom_input: IResolvable | AiGatewayModelProviderServiceConfigCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_query_parameters_input`<sup>Optional</sup> <a name="forward_query_parameters_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```python
forward_query_parameters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_unmanaged_paths_input`<sup>Optional</sup> <a name="forward_unmanaged_paths_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```python
forward_unmanaged_paths_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `gemini_enterprise_input`<sup>Optional</sup> <a name="gemini_enterprise_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```python
gemini_enterprise_input: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `inference_table_input`<sup>Optional</sup> <a name="inference_table_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```python
inference_table_input: IResolvable | AiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `microsoft_foundry_input`<sup>Optional</sup> <a name="microsoft_foundry_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```python
microsoft_foundry_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `openai_input`<sup>Optional</sup> <a name="openai_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```python
openai_input: IResolvable | AiGatewayModelProviderServiceConfigOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---

##### `provider_type_input`<sup>Optional</sup> <a name="provider_type_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```python
provider_type_input: str
```

- *Type:* str

---

##### `rate_limits_input`<sup>Optional</sup> <a name="rate_limits_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```python
rate_limits_input: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]

---

##### `targets_input`<sup>Optional</sup> <a name="targets_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```python
targets_input: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]

---

##### `allow_all_targets`<sup>Required</sup> <a name="allow_all_targets" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```python
allow_all_targets: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```python
forward_headers: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_query_parameters`<sup>Required</sup> <a name="forward_query_parameters" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```python
forward_query_parameters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `forward_unmanaged_paths`<sup>Required</sup> <a name="forward_unmanaged_paths" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```python
forward_unmanaged_paths: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `provider_type`<sup>Required</sup> <a name="provider_type" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```python
provider_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigA
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigA">AiGatewayModelProviderServiceConfigA</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">put_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_secret` <a name="put_client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```python
def put_client_secret(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">put_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">reset_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `put_entra_service_principal` <a name="put_entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```python
def put_entra_service_principal(
  client_id: str = None,
  client_secret: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_entra_service_principal` <a name="reset_entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```python
def reset_entra_service_principal() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">entra_service_principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `entra_service_principal`<sup>Required</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```python
entra_service_principal: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `entra_service_principal_input`<sup>Optional</sup> <a name="entra_service_principal_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```python
entra_service_principal_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal = None,
  service_credential: AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

###### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.entraServicePrincipal"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">AiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiDirect">AiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigAzureOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigAzureOpenai">AiGatewayModelProviderServiceConfigAzureOpenai</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="AiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigCustomDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---


### AiGatewayModelProviderServiceConfigCustomOutputReference <a name="AiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigCustomDirectApiKey = None,
  base_url: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectApiKey">AiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigCustomDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirectOutputReference">AiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigCustomDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomDirect">AiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigCustom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigCustom">AiGatewayModelProviderServiceConfigCustom</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---


### AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey = None,
  project_id: str = None,
  region: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#project_id AiGatewayModelProviderService#project_id}.

---

###### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#region AiGatewayModelProviderService#region}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">AiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigGeminiEnterprise
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigGeminiEnterprise">AiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---


### AiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="AiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">reset_table_name_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_table_name_prefix` <a name="reset_table_name_prefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```python
def reset_table_name_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">is_deleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_deleted`<sup>Required</sup> <a name="is_deleted" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```python
is_deleted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigInferenceTable
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigInferenceTable">AiGatewayModelProviderServiceConfigInferenceTable</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">put_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_secret` <a name="put_client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```python
def put_client_secret(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">put_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">put_service_credential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">reset_entra_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">reset_service_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `put_entra_service_principal` <a name="put_entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```python
def put_entra_service_principal(
  client_id: str = None,
  client_secret: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret = None,
  tenant_id: str = None
) -> None
```

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_id AiGatewayModelProviderService#client_id}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.clientSecret"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#client_secret AiGatewayModelProviderService#client_secret}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#tenant_id AiGatewayModelProviderService#tenant_id}.

---

##### `put_service_credential` <a name="put_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```python
def put_service_credential(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#name AiGatewayModelProviderService#name}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_entra_service_principal` <a name="reset_entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```python
def reset_entra_service_principal() -> None
```

##### `reset_service_credential` <a name="reset_service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```python
def reset_service_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">entra_service_principal</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">service_credential</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">entra_service_principal_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">service_credential_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `entra_service_principal`<sup>Required</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```python
entra_service_principal: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `service_credential`<sup>Required</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```python
service_credential: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `entra_service_principal_input`<sup>Optional</sup> <a name="entra_service_principal_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```python
entra_service_principal_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `service_credential_input`<sup>Optional</sup> <a name="service_credential_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```python
service_credential_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---


### AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey = None,
  base_url: str = None,
  entra_service_principal: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal = None,
  service_credential: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

###### `entra_service_principal`<sup>Optional</sup> <a name="entra_service_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.entraServicePrincipal"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#entra_service_principal AiGatewayModelProviderService#entra_service_principal}.

---

###### `service_credential`<sup>Optional</sup> <a name="service_credential" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.serviceCredential"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#service_credential AiGatewayModelProviderService#service_credential}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">AiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigMicrosoftFoundry
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigMicrosoftFoundry">AiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">reset_plaintext</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_plaintext` <a name="reset_plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```python
def reset_plaintext() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">plaintext_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `plaintext_input`<sup>Optional</sup> <a name="plaintext_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```python
plaintext_input: str
```

- *Type:* str

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---


### AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">reset_base_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">reset_organization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```python
def put_api_key(
  plaintext: str = None
) -> None
```

###### `plaintext`<sup>Optional</sup> <a name="plaintext" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.plaintext"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#plaintext AiGatewayModelProviderService#plaintext}.

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_base_url` <a name="reset_base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```python
def reset_base_url() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```python
def reset_organization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">base_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```python
api_key: AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```python
api_key_input: IResolvable | AiGatewayModelProviderServiceConfigOpenaiDirectApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `base_url_input`<sup>Optional</sup> <a name="base_url_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```python
base_url_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `base_url`<sup>Required</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```python
base_url: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---


### AiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="AiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">put_direct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">reset_direct</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_direct` <a name="put_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```python
def put_direct(
  api_key: AiGatewayModelProviderServiceConfigOpenaiDirectApiKey = None,
  base_url: str = None,
  organization: str = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.apiKey"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectApiKey">AiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#api_key AiGatewayModelProviderService#api_key}.

---

###### `base_url`<sup>Optional</sup> <a name="base_url" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.baseUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#base_url AiGatewayModelProviderService#base_url}.

---

###### `organization`<sup>Optional</sup> <a name="organization" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/ai_gateway_model_provider_service#organization AiGatewayModelProviderService#organization}.

---

##### `reset_direct` <a name="reset_direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```python
def reset_direct() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">direct</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">direct_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direct`<sup>Required</sup> <a name="direct" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```python
direct: AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">AiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `direct_input`<sup>Optional</sup> <a name="direct_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```python
direct_input: IResolvable | AiGatewayModelProviderServiceConfigOpenaiDirect
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiDirect">AiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigOpenai">AiGatewayModelProviderServiceConfigOpenai</a>

---


### AiGatewayModelProviderServiceConfigRateLimitsList <a name="AiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayModelProviderServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayModelProviderServiceConfigRateLimits]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>]

---


### AiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="AiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">reset_principal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">reset_requests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">reset_request_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">reset_request_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">reset_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal` <a name="reset_principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```python
def reset_principal() -> None
```

##### `reset_requests` <a name="reset_requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```python
def reset_requests() -> None
```

##### `reset_request_tag_key` <a name="reset_request_tag_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```python
def reset_request_tag_key() -> None
```

##### `reset_request_tag_value` <a name="reset_request_tag_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```python
def reset_request_tag_value() -> None
```

##### `reset_tokens` <a name="reset_tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```python
def reset_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewal_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">request_tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">request_tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewal_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">request_tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">request_tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `renewal_period_input`<sup>Optional</sup> <a name="renewal_period_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```python
renewal_period_input: str
```

- *Type:* str

---

##### `requests_input`<sup>Optional</sup> <a name="requests_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```python
requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key_input`<sup>Optional</sup> <a name="request_tag_key_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```python
request_tag_key_input: str
```

- *Type:* str

---

##### `request_tag_value_input`<sup>Optional</sup> <a name="request_tag_value_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```python
request_tag_value_input: str
```

- *Type:* str

---

##### `tokens_input`<sup>Optional</sup> <a name="tokens_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```python
tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `renewal_period`<sup>Required</sup> <a name="renewal_period" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```python
renewal_period: str
```

- *Type:* str

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```python
requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_tag_key`<sup>Required</sup> <a name="request_tag_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```python
request_tag_key: str
```

- *Type:* str

---

##### `request_tag_value`<sup>Required</sup> <a name="request_tag_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```python
request_tag_value: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```python
tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigRateLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigRateLimits">AiGatewayModelProviderServiceConfigRateLimits</a>

---


### AiGatewayModelProviderServiceConfigTargetsList <a name="AiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayModelProviderServiceConfigTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayModelProviderServiceConfigTargets]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>]

---


### AiGatewayModelProviderServiceConfigTargetsOutputReference <a name="AiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">reset_native_api_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_native_api_types` <a name="reset_native_api_types" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```python
def reset_native_api_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">native_api_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">native_api_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `native_api_types_input`<sup>Optional</sup> <a name="native_api_types_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```python
native_api_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `native_api_types`<sup>Required</sup> <a name="native_api_types" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```python
native_api_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceConfigTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceConfigTargets">AiGatewayModelProviderServiceConfigTargets</a>

---


### AiGatewayModelProviderServiceProviderConfigOutputReference <a name="AiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import ai_gateway_model_provider_service

aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayModelProviderServiceProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayModelProviderService.AiGatewayModelProviderServiceProviderConfig">AiGatewayModelProviderServiceProviderConfig</a>

---




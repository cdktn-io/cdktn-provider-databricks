# `workspaceIamWorkspaceIdentityDetailV2` Submodule <a name="`workspaceIamWorkspaceIdentityDetailV2` Submodule" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceIamWorkspaceIdentityDetailV2 <a name="WorkspaceIamWorkspaceIdentityDetailV2" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2 databricks_workspace_iam_workspace_identity_detail_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig = None,
  workspace_identity_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#provider_config WorkspaceIamWorkspaceIdentityDetailV2#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.workspaceIdentityStatus">workspace_identity_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_identity_status WorkspaceIamWorkspaceIdentityDetailV2#workspace_identity_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#provider_config WorkspaceIamWorkspaceIdentityDetailV2#provider_config}.

---

##### `workspace_identity_status`<sup>Optional</sup> <a name="workspace_identity_status" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.Initializer.parameter.workspaceIdentityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_identity_status WorkspaceIamWorkspaceIdentityDetailV2#workspace_identity_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetWorkspaceIdentityStatus">reset_workspace_identity_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_id WorkspaceIamWorkspaceIdentityDetailV2#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_workspace_identity_status` <a name="reset_workspace_identity_status" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.resetWorkspaceIdentityStatus"></a>

```python
def reset_workspace_identity_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceIamWorkspaceIdentityDetailV2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isConstruct"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformResource"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceIamWorkspaceIdentityDetailV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceIamWorkspaceIdentityDetailV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceIamWorkspaceIdentityDetailV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceIamWorkspaceIdentityDetailV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.assignmentType">assignment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.principalId">principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatusInput">workspace_identity_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatus">workspace_identity_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assignment_type`<sup>Required</sup> <a name="assignment_type" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.assignmentType"></a>

```python
assignment_type: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.principalId"></a>

```python
principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.providerConfig"></a>

```python
provider_config: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference</a>

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

---

##### `workspace_identity_status_input`<sup>Optional</sup> <a name="workspace_identity_status_input" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatusInput"></a>

```python
workspace_identity_status_input: str
```

- *Type:* str

---

##### `workspace_identity_status`<sup>Required</sup> <a name="workspace_identity_status" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.workspaceIdentityStatus"></a>

```python
workspace_identity_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceIamWorkspaceIdentityDetailV2Config <a name="WorkspaceIamWorkspaceIdentityDetailV2Config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provider_config: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig = None,
  workspace_identity_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#provider_config WorkspaceIamWorkspaceIdentityDetailV2#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.workspaceIdentityStatus">workspace_identity_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_identity_status WorkspaceIamWorkspaceIdentityDetailV2#workspace_identity_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.providerConfig"></a>

```python
provider_config: WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#provider_config WorkspaceIamWorkspaceIdentityDetailV2#provider_config}.

---

##### `workspace_identity_status`<sup>Optional</sup> <a name="workspace_identity_status" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2Config.property.workspaceIdentityStatus"></a>

```python
workspace_identity_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_identity_status WorkspaceIamWorkspaceIdentityDetailV2#workspace_identity_status}.

---

### WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig <a name="WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_id WorkspaceIamWorkspaceIdentityDetailV2#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/workspace_iam_workspace_identity_detail_v2#workspace_id WorkspaceIamWorkspaceIdentityDetailV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference <a name="WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_iam_workspace_identity_detail_v2

workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.workspaceIamWorkspaceIdentityDetailV2.WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig">WorkspaceIamWorkspaceIdentityDetailV2ProviderConfig</a>

---




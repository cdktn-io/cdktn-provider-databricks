# `workspaceBinding` Submodule <a name="`workspaceBinding` Submodule" id="@cdktn/provider-databricks.workspaceBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceBinding <a name="WorkspaceBinding" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding databricks_workspace_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  workspace_id: typing.Union[int, float],
  binding_type: str = None,
  catalog_name: str = None,
  id: str = None,
  provider_config: WorkspaceBindingProviderConfig = None,
  securable_name: str = None,
  securable_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#binding_type WorkspaceBinding#binding_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#catalog_name WorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#id WorkspaceBinding#id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.securableName">securable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_name WorkspaceBinding#securable_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_type WorkspaceBinding#securable_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.workspaceId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.bindingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#binding_type WorkspaceBinding#binding_type}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#catalog_name WorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#id WorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#provider_config WorkspaceBinding#provider_config}

---

##### `securable_name`<sup>Optional</sup> <a name="securable_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.securableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_name WorkspaceBinding#securable_name}.

---

##### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.Initializer.parameter.securableType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_type WorkspaceBinding#securable_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetBindingType">reset_binding_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetSecurableName">reset_securable_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetSecurableType">reset_securable_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}.

---

##### `reset_binding_type` <a name="reset_binding_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetBindingType"></a>

```python
def reset_binding_type() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_securable_name` <a name="reset_securable_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetSecurableName"></a>

```python
def reset_securable_name() -> None
```

##### `reset_securable_type` <a name="reset_securable_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.resetSecurableType"></a>

```python
def reset_securable_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WorkspaceBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isConstruct"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformElement"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformResource"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WorkspaceBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference">WorkspaceBindingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.bindingTypeInput">binding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.providerConfigInput">provider_config_input</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableNameInput">securable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableTypeInput">securable_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.workspaceIdInput">workspace_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.bindingType">binding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableName">securable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableType">securable_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.providerConfig"></a>

```python
provider_config: WorkspaceBindingProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference">WorkspaceBindingProviderConfigOutputReference</a>

---

##### `binding_type_input`<sup>Optional</sup> <a name="binding_type_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.bindingTypeInput"></a>

```python
binding_type_input: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.providerConfigInput"></a>

```python
provider_config_input: WorkspaceBindingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a>

---

##### `securable_name_input`<sup>Optional</sup> <a name="securable_name_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableNameInput"></a>

```python
securable_name_input: str
```

- *Type:* str

---

##### `securable_type_input`<sup>Optional</sup> <a name="securable_type_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableTypeInput"></a>

```python
securable_type_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.workspaceIdInput"></a>

```python
workspace_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binding_type`<sup>Required</sup> <a name="binding_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `securable_name`<sup>Required</sup> <a name="securable_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableName"></a>

```python
securable_name: str
```

- *Type:* str

---

##### `securable_type`<sup>Required</sup> <a name="securable_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceBindingConfig <a name="WorkspaceBindingConfig" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  workspace_id: typing.Union[int, float],
  binding_type: str = None,
  catalog_name: str = None,
  id: str = None,
  provider_config: WorkspaceBindingProviderConfig = None,
  securable_name: str = None,
  securable_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.workspaceId">workspace_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.bindingType">binding_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#binding_type WorkspaceBinding#binding_type}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#catalog_name WorkspaceBinding#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#id WorkspaceBinding#id}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.securableName">securable_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_name WorkspaceBinding#securable_name}. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.securableType">securable_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_type WorkspaceBinding#securable_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.workspaceId"></a>

```python
workspace_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}.

---

##### `binding_type`<sup>Optional</sup> <a name="binding_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.bindingType"></a>

```python
binding_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#binding_type WorkspaceBinding#binding_type}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#catalog_name WorkspaceBinding#catalog_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#id WorkspaceBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.providerConfig"></a>

```python
provider_config: WorkspaceBindingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#provider_config WorkspaceBinding#provider_config}

---

##### `securable_name`<sup>Optional</sup> <a name="securable_name" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.securableName"></a>

```python
securable_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_name WorkspaceBinding#securable_name}.

---

##### `securable_type`<sup>Optional</sup> <a name="securable_type" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingConfig.property.securableType"></a>

```python
securable_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#securable_type WorkspaceBinding#securable_type}.

---

### WorkspaceBindingProviderConfig <a name="WorkspaceBindingProviderConfig" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBindingProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.114.2/docs/resources/workspace_binding#workspace_id WorkspaceBinding#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceBindingProviderConfigOutputReference <a name="WorkspaceBindingProviderConfigOutputReference" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import workspace_binding

workspaceBinding.WorkspaceBindingProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceBindingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.workspaceBinding.WorkspaceBindingProviderConfig">WorkspaceBindingProviderConfig</a>

---




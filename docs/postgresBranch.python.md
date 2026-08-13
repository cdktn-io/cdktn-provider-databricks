# `postgresBranch` Submodule <a name="`postgresBranch` Submodule" id="@cdktn/provider-databricks.postgresBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresBranch <a name="PostgresBranch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch databricks_postgres_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranch(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  branch_id: str,
  parent: str,
  provider_config: PostgresBranchProviderConfig = None,
  purge_on_delete: bool | IResolvable = None,
  replace_existing: bool | IResolvable = None,
  spec: PostgresBranchSpec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.branchId">branch_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.branchId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `purge_on_delete`<sup>Optional</sup> <a name="purge_on_delete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.purgeOnDelete"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `replace_existing`<sup>Optional</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.replaceExisting"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete">reset_purge_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting">reset_replace_existing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}.

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec"></a>

```python
def put_spec(
  expire_time: str = None,
  is_protected: bool | IResolvable = None,
  no_expiry: bool | IResolvable = None,
  source_branch: str = None,
  source_branch_lsn: str = None,
  source_branch_time: str = None,
  ttl: str = None
) -> None
```

###### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.expireTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}.

---

###### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.isProtected"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}.

---

###### `no_expiry`<sup>Optional</sup> <a name="no_expiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.noExpiry"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}.

---

###### `source_branch`<sup>Optional</sup> <a name="source_branch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.sourceBranch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}.

---

###### `source_branch_lsn`<sup>Optional</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.sourceBranchLsn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}.

---

###### `source_branch_time`<sup>Optional</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.sourceBranchTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}.

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.putSpec.parameter.ttl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_purge_on_delete` <a name="reset_purge_on_delete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetPurgeOnDelete"></a>

```python
def reset_purge_on_delete() -> None
```

##### `reset_replace_existing` <a name="reset_replace_existing" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetReplaceExisting"></a>

```python
def reset_replace_existing() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PostgresBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresBranch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PostgresBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput">branch_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput">purge_on_delete_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput">replace_existing_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId">branch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfig"></a>

```python
provider_config: PostgresBranchProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference">PostgresBranchProviderConfigOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.spec"></a>

```python
spec: PostgresBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference">PostgresBranchSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.status"></a>

```python
status: PostgresBranchStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference">PostgresBranchStatusOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `branch_id_input`<sup>Optional</sup> <a name="branch_id_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchIdInput"></a>

```python
branch_id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | PostgresBranchProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---

##### `purge_on_delete_input`<sup>Optional</sup> <a name="purge_on_delete_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDeleteInput"></a>

```python
purge_on_delete_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replace_existing_input`<sup>Optional</sup> <a name="replace_existing_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExistingInput"></a>

```python
replace_existing_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.specInput"></a>

```python
spec_input: IResolvable | PostgresBranchSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.branchId"></a>

```python
branch_id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `purge_on_delete`<sup>Required</sup> <a name="purge_on_delete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.purgeOnDelete"></a>

```python
purge_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replace_existing`<sup>Required</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.replaceExisting"></a>

```python
replace_existing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.postgresBranch.PostgresBranch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresBranchConfig <a name="PostgresBranchConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  branch_id: str,
  parent: str,
  provider_config: PostgresBranchProviderConfig = None,
  purge_on_delete: bool | IResolvable = None,
  replace_existing: bool | IResolvable = None,
  spec: PostgresBranchSpec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId">branch_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#parent PostgresBranch#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete">purge_on_delete</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting">replace_existing</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#spec PostgresBranch#spec}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.branchId"></a>

```python
branch_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#branch_id PostgresBranch#branch_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#parent PostgresBranch#parent}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.providerConfig"></a>

```python
provider_config: PostgresBranchProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#provider_config PostgresBranch#provider_config}.

---

##### `purge_on_delete`<sup>Optional</sup> <a name="purge_on_delete" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.purgeOnDelete"></a>

```python
purge_on_delete: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#purge_on_delete PostgresBranch#purge_on_delete}.

---

##### `replace_existing`<sup>Optional</sup> <a name="replace_existing" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.replaceExisting"></a>

```python
replace_existing: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#replace_existing PostgresBranch#replace_existing}.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchConfig.property.spec"></a>

```python
spec: PostgresBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#spec PostgresBranch#spec}.

---

### PostgresBranchProviderConfig <a name="PostgresBranchProviderConfig" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#workspace_id PostgresBranch#workspace_id}.

---

### PostgresBranchSpec <a name="PostgresBranchSpec" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchSpec(
  expire_time: str = None,
  is_protected: bool | IResolvable = None,
  no_expiry: bool | IResolvable = None,
  source_branch: str = None,
  source_branch_lsn: str = None,
  source_branch_time: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime">expire_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch">source_branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl">ttl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}. |

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#expire_time PostgresBranch#expire_time}.

---

##### `is_protected`<sup>Optional</sup> <a name="is_protected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#is_protected PostgresBranch#is_protected}.

---

##### `no_expiry`<sup>Optional</sup> <a name="no_expiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#no_expiry PostgresBranch#no_expiry}.

---

##### `source_branch`<sup>Optional</sup> <a name="source_branch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch PostgresBranch#source_branch}.

---

##### `source_branch_lsn`<sup>Optional</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_lsn PostgresBranch#source_branch_lsn}.

---

##### `source_branch_time`<sup>Optional</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#source_branch_time PostgresBranch#source_branch_time}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/resources/postgres_branch#ttl PostgresBranch#ttl}.

---

### PostgresBranchStatus <a name="PostgresBranchStatus" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchStatus()
```


## Classes <a name="Classes" id="Classes"></a>

### PostgresBranchProviderConfigOutputReference <a name="PostgresBranchProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresBranchProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchProviderConfig">PostgresBranchProviderConfig</a>

---


### PostgresBranchSpecOutputReference <a name="PostgresBranchSpecOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected">reset_is_protected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry">reset_no_expiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch">reset_source_branch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn">reset_source_branch_lsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime">reset_source_branch_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_is_protected` <a name="reset_is_protected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetIsProtected"></a>

```python
def reset_is_protected() -> None
```

##### `reset_no_expiry` <a name="reset_no_expiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetNoExpiry"></a>

```python
def reset_no_expiry() -> None
```

##### `reset_source_branch` <a name="reset_source_branch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranch"></a>

```python
def reset_source_branch() -> None
```

##### `reset_source_branch_lsn` <a name="reset_source_branch_lsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchLsn"></a>

```python
def reset_source_branch_lsn() -> None
```

##### `reset_source_branch_time` <a name="reset_source_branch_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetSourceBranchTime"></a>

```python
def reset_source_branch_time() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput">is_protected_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput">no_expiry_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput">source_branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput">source_branch_lsn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput">source_branch_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected">is_protected</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry">no_expiry</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch">source_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `is_protected_input`<sup>Optional</sup> <a name="is_protected_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtectedInput"></a>

```python
is_protected_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_expiry_input`<sup>Optional</sup> <a name="no_expiry_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiryInput"></a>

```python
no_expiry_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_branch_input`<sup>Optional</sup> <a name="source_branch_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchInput"></a>

```python
source_branch_input: str
```

- *Type:* str

---

##### `source_branch_lsn_input`<sup>Optional</sup> <a name="source_branch_lsn_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsnInput"></a>

```python
source_branch_lsn_input: str
```

- *Type:* str

---

##### `source_branch_time_input`<sup>Optional</sup> <a name="source_branch_time_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTimeInput"></a>

```python
source_branch_time_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.isProtected"></a>

```python
is_protected: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `no_expiry`<sup>Required</sup> <a name="no_expiry" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.noExpiry"></a>

```python
no_expiry: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `source_branch`<sup>Required</sup> <a name="source_branch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

---

##### `source_branch_lsn`<sup>Required</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

---

##### `source_branch_time`<sup>Required</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchSpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PostgresBranchSpec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchSpec">PostgresBranchSpec</a>

---


### PostgresBranchStatusOutputReference <a name="PostgresBranchStatusOutputReference" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import postgres_branch

postgresBranch.PostgresBranchStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId">branch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState">current_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected">is_protected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes">logical_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState">pending_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime">purge_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch">source_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn">source_branch_lsn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime">source_branch_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime">state_change_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_id`<sup>Required</sup> <a name="branch_id" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.branchId"></a>

```python
branch_id: str
```

- *Type:* str

---

##### `current_state`<sup>Required</sup> <a name="current_state" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.currentState"></a>

```python
current_state: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.isProtected"></a>

```python
is_protected: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `logical_size_bytes`<sup>Required</sup> <a name="logical_size_bytes" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.logicalSizeBytes"></a>

```python
logical_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_state`<sup>Required</sup> <a name="pending_state" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.pendingState"></a>

```python
pending_state: str
```

- *Type:* str

---

##### `purge_time`<sup>Required</sup> <a name="purge_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.purgeTime"></a>

```python
purge_time: str
```

- *Type:* str

---

##### `source_branch`<sup>Required</sup> <a name="source_branch" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranch"></a>

```python
source_branch: str
```

- *Type:* str

---

##### `source_branch_lsn`<sup>Required</sup> <a name="source_branch_lsn" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchLsn"></a>

```python
source_branch_lsn: str
```

- *Type:* str

---

##### `source_branch_time`<sup>Required</sup> <a name="source_branch_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.sourceBranchTime"></a>

```python
source_branch_time: str
```

- *Type:* str

---

##### `state_change_time`<sup>Required</sup> <a name="state_change_time" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.stateChangeTime"></a>

```python
state_change_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.postgresBranch.PostgresBranchStatusOutputReference.property.internalValue"></a>

```python
internal_value: PostgresBranchStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresBranch.PostgresBranchStatus">PostgresBranchStatus</a>

---




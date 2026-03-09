# `warehousesDefaultWarehouseOverride` Submodule <a name="`warehousesDefaultWarehouseOverride` Submodule" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehousesDefaultWarehouseOverride <a name="WarehousesDefaultWarehouseOverride" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override databricks_warehouses_default_warehouse_override}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_warehouse_override_id: str,
  type: str,
  provider_config: WarehousesDefaultWarehouseOverrideProviderConfig = None,
  warehouse_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.defaultWarehouseOverrideId">default_warehouse_override_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_warehouse_override_id`<sup>Required</sup> <a name="default_warehouse_override_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.defaultWarehouseOverrideId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig">reset_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str
) -> None
```

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WarehousesDefaultWarehouseOverride resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WarehousesDefaultWarehouseOverride to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WarehousesDefaultWarehouseOverride that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WarehousesDefaultWarehouseOverride to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput">default_warehouse_override_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId">default_warehouse_override_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfig"></a>

```python
provider_config: WarehousesDefaultWarehouseOverrideProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference">WarehousesDefaultWarehouseOverrideProviderConfigOutputReference</a>

---

##### `default_warehouse_override_id_input`<sup>Optional</sup> <a name="default_warehouse_override_id_input" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideIdInput"></a>

```python
default_warehouse_override_id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | WarehousesDefaultWarehouseOverrideProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `default_warehouse_override_id`<sup>Required</sup> <a name="default_warehouse_override_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.defaultWarehouseOverrideId"></a>

```python
default_warehouse_override_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverride.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WarehousesDefaultWarehouseOverrideConfig <a name="WarehousesDefaultWarehouseOverrideConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.Initializer"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_warehouse_override_id: str,
  type: str,
  provider_config: WarehousesDefaultWarehouseOverrideProviderConfig = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId">default_warehouse_override_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `default_warehouse_override_id`<sup>Required</sup> <a name="default_warehouse_override_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.defaultWarehouseOverrideId"></a>

```python
default_warehouse_override_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#default_warehouse_override_id WarehousesDefaultWarehouseOverride#default_warehouse_override_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#type WarehousesDefaultWarehouseOverride#type}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.providerConfig"></a>

```python
provider_config: WarehousesDefaultWarehouseOverrideProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#provider_config WarehousesDefaultWarehouseOverride#provider_config}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#warehouse_id WarehousesDefaultWarehouseOverride#warehouse_id}.

---

### WarehousesDefaultWarehouseOverrideProviderConfig <a name="WarehousesDefaultWarehouseOverrideProviderConfig" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig(
  workspace_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}. |

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.110.0/docs/resources/warehouses_default_warehouse_override#workspace_id WarehousesDefaultWarehouseOverride#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehousesDefaultWarehouseOverrideProviderConfigOutputReference <a name="WarehousesDefaultWarehouseOverrideProviderConfigOutputReference" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import warehouses_default_warehouse_override

warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WarehousesDefaultWarehouseOverrideProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.warehousesDefaultWarehouseOverride.WarehousesDefaultWarehouseOverrideProviderConfig">WarehousesDefaultWarehouseOverrideProviderConfig</a>

---




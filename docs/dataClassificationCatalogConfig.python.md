# `dataClassificationCatalogConfig` Submodule <a name="`dataClassificationCatalogConfig` Submodule" id="@cdktn/provider-databricks.dataClassificationCatalogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataClassificationCatalogConfig <a name="DataClassificationCatalogConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config databricks_data_classification_catalog_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  auto_tag_configs: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs] = None,
  included_schemas: DataClassificationCatalogConfigIncludedSchemas = None,
  provider_config: DataClassificationCatalogConfigProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.autoTagConfigs">auto_tag_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.includedSchemas">included_schemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}.

---

##### `auto_tag_configs`<sup>Optional</sup> <a name="auto_tag_configs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.autoTagConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}.

---

##### `included_schemas`<sup>Optional</sup> <a name="included_schemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.includedSchemas"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs">put_auto_tag_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas">put_included_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs">reset_auto_tag_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas">reset_included_schemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_tag_configs` <a name="put_auto_tag_configs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs"></a>

```python
def put_auto_tag_configs(
  value: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putAutoTagConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]

---

##### `put_included_schemas` <a name="put_included_schemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas"></a>

```python
def put_included_schemas(
  names: typing.List[str]
) -> None
```

###### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putIncludedSchemas.parameter.names"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}.

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}.

---

##### `reset_auto_tag_configs` <a name="reset_auto_tag_configs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetAutoTagConfigs"></a>

```python
def reset_auto_tag_configs() -> None
```

##### `reset_included_schemas` <a name="reset_included_schemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetIncludedSchemas"></a>

```python
def reset_included_schemas() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataClassificationCatalogConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataClassificationCatalogConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataClassificationCatalogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataClassificationCatalogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs">auto_tag_configs</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas">included_schemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput">auto_tag_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput">included_schemas_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_tag_configs`<sup>Required</sup> <a name="auto_tag_configs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigs"></a>

```python
auto_tag_configs: DataClassificationCatalogConfigAutoTagConfigsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList">DataClassificationCatalogConfigAutoTagConfigsList</a>

---

##### `included_schemas`<sup>Required</sup> <a name="included_schemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemas"></a>

```python
included_schemas: DataClassificationCatalogConfigIncludedSchemasOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference">DataClassificationCatalogConfigIncludedSchemasOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfig"></a>

```python
provider_config: DataClassificationCatalogConfigProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference">DataClassificationCatalogConfigProviderConfigOutputReference</a>

---

##### `auto_tag_configs_input`<sup>Optional</sup> <a name="auto_tag_configs_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.autoTagConfigsInput"></a>

```python
auto_tag_configs_input: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]

---

##### `included_schemas_input`<sup>Optional</sup> <a name="included_schemas_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.includedSchemasInput"></a>

```python
included_schemas_input: IResolvable | DataClassificationCatalogConfigIncludedSchemas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataClassificationCatalogConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataClassificationCatalogConfigAutoTagConfigs <a name="DataClassificationCatalogConfigAutoTagConfigs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs(
  auto_tagging_mode: str,
  classification_tag: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode">auto_tagging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag">classification_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}. |

---

##### `auto_tagging_mode`<sup>Required</sup> <a name="auto_tagging_mode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.autoTaggingMode"></a>

```python
auto_tagging_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tagging_mode DataClassificationCatalogConfig#auto_tagging_mode}.

---

##### `classification_tag`<sup>Required</sup> <a name="classification_tag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs.property.classificationTag"></a>

```python
classification_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#classification_tag DataClassificationCatalogConfig#classification_tag}.

---

### DataClassificationCatalogConfigConfig <a name="DataClassificationCatalogConfigConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  parent: str,
  auto_tag_configs: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs] = None,
  included_schemas: DataClassificationCatalogConfigIncludedSchemas = None,
  provider_config: DataClassificationCatalogConfigProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs">auto_tag_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas">included_schemas</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#parent DataClassificationCatalogConfig#parent}.

---

##### `auto_tag_configs`<sup>Optional</sup> <a name="auto_tag_configs" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.autoTagConfigs"></a>

```python
auto_tag_configs: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#auto_tag_configs DataClassificationCatalogConfig#auto_tag_configs}.

---

##### `included_schemas`<sup>Optional</sup> <a name="included_schemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.includedSchemas"></a>

```python
included_schemas: DataClassificationCatalogConfigIncludedSchemas
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#included_schemas DataClassificationCatalogConfig#included_schemas}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigConfig.property.providerConfig"></a>

```python
provider_config: DataClassificationCatalogConfigProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#provider_config DataClassificationCatalogConfig#provider_config}.

---

### DataClassificationCatalogConfigIncludedSchemas <a name="DataClassificationCatalogConfigIncludedSchemas" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas(
  names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names">names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}. |

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#names DataClassificationCatalogConfig#names}.

---

### DataClassificationCatalogConfigProviderConfig <a name="DataClassificationCatalogConfigProviderConfig" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.117.0/docs/resources/data_classification_catalog_config#workspace_id DataClassificationCatalogConfig#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataClassificationCatalogConfigAutoTagConfigsList <a name="DataClassificationCatalogConfigAutoTagConfigsList" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataClassificationCatalogConfigAutoTagConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataClassificationCatalogConfigAutoTagConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>]

---


### DataClassificationCatalogConfigAutoTagConfigsOutputReference <a name="DataClassificationCatalogConfigAutoTagConfigsOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput">auto_tagging_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput">classification_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode">auto_tagging_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag">classification_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_tagging_mode_input`<sup>Optional</sup> <a name="auto_tagging_mode_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingModeInput"></a>

```python
auto_tagging_mode_input: str
```

- *Type:* str

---

##### `classification_tag_input`<sup>Optional</sup> <a name="classification_tag_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTagInput"></a>

```python
classification_tag_input: str
```

- *Type:* str

---

##### `auto_tagging_mode`<sup>Required</sup> <a name="auto_tagging_mode" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.autoTaggingMode"></a>

```python
auto_tagging_mode: str
```

- *Type:* str

---

##### `classification_tag`<sup>Required</sup> <a name="classification_tag" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.classificationTag"></a>

```python
classification_tag: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataClassificationCatalogConfigAutoTagConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigAutoTagConfigs">DataClassificationCatalogConfigAutoTagConfigs</a>

---


### DataClassificationCatalogConfigIncludedSchemasOutputReference <a name="DataClassificationCatalogConfigIncludedSchemasOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput">names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `names_input`<sup>Optional</sup> <a name="names_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.namesInput"></a>

```python
names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemasOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataClassificationCatalogConfigIncludedSchemas
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigIncludedSchemas">DataClassificationCatalogConfigIncludedSchemas</a>

---


### DataClassificationCatalogConfigProviderConfigOutputReference <a name="DataClassificationCatalogConfigProviderConfigOutputReference" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_classification_catalog_config

dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataClassificationCatalogConfigProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataClassificationCatalogConfig.DataClassificationCatalogConfigProviderConfig">DataClassificationCatalogConfigProviderConfig</a>

---




# `dataDatabricksFeatureEngineeringMaterializedFeature` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeature` Submodule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeature <a name="DataDatabricksFeatureEngineeringMaterializedFeature" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  materialized_feature_id: str,
  provider_config: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.materializedFeatureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksFeatureEngineeringMaterializedFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule">cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronScheduleTrigger">cron_schedule_trigger</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline">is_online</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime">last_materialization_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.streamingMode">streaming_mode</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableTrigger">table_trigger</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput">materialized_feature_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cron_schedule`<sup>Required</sup> <a name="cron_schedule" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronSchedule"></a>

```python
cron_schedule: str
```

- *Type:* str

---

##### `cron_schedule_trigger`<sup>Required</sup> <a name="cron_schedule_trigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.cronScheduleTrigger"></a>

```python
cron_schedule_trigger: DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference</a>

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `is_online`<sup>Required</sup> <a name="is_online" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.isOnline"></a>

```python
is_online: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `last_materialization_time`<sup>Required</sup> <a name="last_materialization_time" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```python
last_materialization_time: str
```

- *Type:* str

---

##### `offline_store_config`<sup>Required</sup> <a name="offline_store_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```python
offline_store_config: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `online_store_config`<sup>Required</sup> <a name="online_store_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```python
online_store_config: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `pipeline_schedule_state`<sup>Required</sup> <a name="pipeline_schedule_state" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```python
pipeline_schedule_state: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference</a>

---

##### `streaming_mode`<sup>Required</sup> <a name="streaming_mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.streamingMode"></a>

```python
streaming_mode: DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `table_trigger`<sup>Required</sup> <a name="table_trigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tableTrigger"></a>

```python
table_trigger: DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference">DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference</a>

---

##### `materialized_feature_id_input`<sup>Optional</sup> <a name="materialized_feature_id_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureIdInput"></a>

```python
materialized_feature_id_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  materialized_feature_id: str,
  provider_config: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeature#materialized_feature_id}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#provider_config DataDatabricksFeatureEngineeringMaterializedFeature#provider_config}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger <a name="DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger(
  cron_expression: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#cron_expression DataDatabricksFeatureEngineeringMaterializedFeature#cron_expression}. |

---

##### `cron_expression`<sup>Optional</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#cron_expression DataDatabricksFeatureEngineeringMaterializedFeature#cron_expression}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig(
  catalog_name: str,
  schema_name: str,
  table_name_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig(
  catalog_name: str,
  online_store_name: str,
  schema_name: str,
  table_name_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName">online_store_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#catalog_name DataDatabricksFeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `online_store_name`<sup>Required</sup> <a name="online_store_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.onlineStoreName"></a>

```python
online_store_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#online_store_name DataDatabricksFeatureEngineeringMaterializedFeature#online_store_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#schema_name DataDatabricksFeatureEngineeringMaterializedFeature#schema_name}.

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#workspace_id DataDatabricksFeatureEngineeringMaterializedFeature#workspace_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode <a name="DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode(
  freshness_target: str = None,
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget">freshness_target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#freshness_target DataDatabricksFeatureEngineeringMaterializedFeature#freshness_target}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#mode DataDatabricksFeatureEngineeringMaterializedFeature#mode}. |

---

##### `freshness_target`<sup>Optional</sup> <a name="freshness_target" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.freshnessTarget"></a>

```python
freshness_target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#freshness_target DataDatabricksFeatureEngineeringMaterializedFeature#freshness_target}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/feature_engineering_materialized_feature#mode DataDatabricksFeatureEngineeringMaterializedFeature#mode}.

---

### DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger <a name="DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger()
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression">reset_cron_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cron_expression` <a name="reset_cron_expression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.resetCronExpression"></a>

```python
def reset_cron_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureCronScheduleTrigger</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput">online_store_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName">online_store_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `online_store_name_input`<sup>Optional</sup> <a name="online_store_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreNameInput"></a>

```python
online_store_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `online_store_name`<sup>Required</sup> <a name="online_store_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.onlineStoreName"></a>

```python
online_store_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig">DataDatabricksFeatureEngineeringMaterializedFeatureProviderConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget">reset_freshness_target</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_freshness_target` <a name="reset_freshness_target" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetFreshnessTarget"></a>

```python
def reset_freshness_target() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput">freshness_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget">freshness_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `freshness_target_input`<sup>Optional</sup> <a name="freshness_target_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTargetInput"></a>

```python
freshness_target_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `freshness_target`<sup>Required</sup> <a name="freshness_target" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.freshnessTarget"></a>

```python
freshness_target: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingModeOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode">DataDatabricksFeatureEngineeringMaterializedFeatureStreamingMode</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_feature_engineering_materialized_feature

dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTriggerOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeature.DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger">DataDatabricksFeatureEngineeringMaterializedFeatureTableTrigger</a>

---




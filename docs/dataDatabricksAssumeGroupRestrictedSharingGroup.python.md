# `dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroup <a name="DataDatabricksAssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName">group_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">restricted_sharing_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `group_display_name`<sup>Required</sup> <a name="group_display_name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```python
group_display_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `restricted_sharing_group_id`<sup>Required</sup> <a name="restricted_sharing_group_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```python
restricted_sharing_group_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#name DataDatabricksAssumeGroupRestrictedSharingGroup#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#provider_config DataDatabricksAssumeGroupRestrictedSharingGroup#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/data-sources/assume_group_restricted_sharing_group#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_group

dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroup.DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupProviderConfig</a>

---




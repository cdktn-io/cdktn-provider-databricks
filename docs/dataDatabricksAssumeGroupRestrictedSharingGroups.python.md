# `dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups databricks_assume_group_restricted_sharing_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.providerConfig"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize">reset_page_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize"></a>

```python
def reset_page_size() -> None
```

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups">restricted_sharing_groups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `restricted_sharing_groups`<sup>Required</sup> <a name="restricted_sharing_groups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups"></a>

```python
restricted_sharing_groups: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a>

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  page_size: typing.Union[int, float] = None,
  provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups(
  name: str,
  provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}.

---

##### `provider_config`<sup>Optional</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig(
  workspace_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>]

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig">put_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig">reset_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_provider_config` <a name="put_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig"></a>

```python
def put_provider_config(
  workspace_id: str = None
) -> None
```

###### `workspace_id`<sup>Optional</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

##### `reset_provider_config` <a name="reset_provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig"></a>

```python
def reset_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName">group_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig">provider_config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId">restricted_sharing_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput">provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_display_name`<sup>Required</sup> <a name="group_display_name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName"></a>

```python
group_display_name: str
```

- *Type:* str

---

##### `provider_config`<sup>Required</sup> <a name="provider_config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig"></a>

```python
provider_config: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `restricted_sharing_group_id`<sup>Required</sup> <a name="restricted_sharing_group_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId"></a>

```python
restricted_sharing_group_id: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_config_input`<sup>Optional</sup> <a name="provider_config_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput"></a>

```python
provider_config_input: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_databricks import data_databricks_assume_group_restricted_sharing_groups

dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">reset_workspace_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_id` <a name="reset_workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```python
def reset_workspace_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---




# `dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule <a name="`dataDatabricksAssumeGroupRestrictedSharingGroups` Submodule" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups databricks_assume_group_restricted_sharing_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.NewDataDatabricksAssumeGroupRestrictedSharingGroups(scope Construct, id *string, config DataDatabricksAssumeGroupRestrictedSharingGroupsConfig) DataDatabricksAssumeGroupRestrictedSharingGroups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroups_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksAssumeGroupRestrictedSharingGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAssumeGroupRestrictedSharingGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAssumeGroupRestrictedSharingGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAssumeGroupRestrictedSharingGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups">RestrictedSharingGroups</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `RestrictedSharingGroups`<sup>Required</sup> <a name="RestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.restrictedSharingGroups"></a>

```go
func RestrictedSharingGroups() DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

&datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#page_size DataDatabricksAssumeGroupRestrictedSharingGroups#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

&datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

&datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#name DataDatabricksAssumeGroupRestrictedSharingGroups#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#provider_config DataDatabricksAssumeGroupRestrictedSharingGroups#provider_config}.

---

### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

&datadatabricksassumegrouprestrictedsharinggroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/assume_group_restricted_sharing_groups#workspace_id DataDatabricksAssumeGroupRestrictedSharingGroups#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.NewDataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.NewDataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get"></a>

```go
func Get(index *f64) DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.NewDataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName">GroupDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId">RestrictedSharingGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.groupDisplayName"></a>

```go
func GroupDisplayName() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference</a>

---

##### `RestrictedSharingGroupId`<sup>Required</sup> <a name="RestrictedSharingGroupId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.restrictedSharingGroupId"></a>

```go
func RestrictedSharingGroupId() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups">DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroups</a>

---


### DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference <a name="DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v19/datadatabricksassumegrouprestrictedsharinggroups"

datadatabricksassumegrouprestrictedsharinggroups.NewDataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAssumeGroupRestrictedSharingGroups.DataDatabricksAssumeGroupRestrictedSharingGroupsRestrictedSharingGroupsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




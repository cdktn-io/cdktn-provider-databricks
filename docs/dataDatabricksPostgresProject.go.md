# `dataDatabricksPostgresProject` Submodule <a name="`dataDatabricksPostgresProject` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProject <a name="DataDatabricksPostgresProject" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project databricks_postgres_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProject(scope Construct, id *string, config DataDatabricksPostgresProjectConfig) DataDatabricksPostgresProject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig">DataDatabricksPostgresProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig">DataDatabricksPostgresProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresProjectProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.DataDatabricksPostgresProject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.DataDatabricksPostgresProject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.DataDatabricksPostgresProject_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.DataDatabricksPostgresProject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialBranchSpec">InitialBranchSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference">DataDatabricksPostgresProjectInitialBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec">InitialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `InitialBranchSpec`<sup>Required</sup> <a name="InitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialBranchSpec"></a>

```go
func InitialBranchSpec() DataDatabricksPostgresProjectInitialBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference">DataDatabricksPostgresProjectInitialBranchSpecOutputReference</a>

---

##### `InitialEndpointSpec`<sup>Required</sup> <a name="InitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.initialEndpointSpec"></a>

```go
func InitialEndpointSpec() DataDatabricksPostgresProjectInitialEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresProjectProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference">DataDatabricksPostgresProjectProviderConfigOutputReference</a>

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.spec"></a>

```go
func Spec() DataDatabricksPostgresProjectSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference">DataDatabricksPostgresProjectSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.status"></a>

```go
func Status() DataDatabricksPostgresProjectStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference">DataDatabricksPostgresProjectStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectConfig <a name="DataDatabricksPostgresProjectConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#name DataDatabricksPostgresProject#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresProjectProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig">DataDatabricksPostgresProjectProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#provider_config DataDatabricksPostgresProject#provider_config}.

---

### DataDatabricksPostgresProjectInitialBranchSpec <a name="DataDatabricksPostgresProjectInitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectInitialBranchSpec {
	IsProtected: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#is_protected DataDatabricksPostgresProject#is_protected}. |

---

##### `IsProtected`<sup>Optional</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec.property.isProtected"></a>

```go
IsProtected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#is_protected DataDatabricksPostgresProject#is_protected}.

---

### DataDatabricksPostgresProjectInitialEndpointSpec <a name="DataDatabricksPostgresProjectInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectInitialEndpointSpec {
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	Group: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup,
	NoSuspension: interface{},
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.group"></a>

```go
Group DataDatabricksPostgresProjectInitialEndpointSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#group DataDatabricksPostgresProject#group}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectInitialEndpointSpecGroup {
	Max: *f64,
	Min: *f64,
	EnableReadableSecondaries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#max DataDatabricksPostgresProject#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#min DataDatabricksPostgresProject#min}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_readable_secondaries DataDatabricksPostgresProject#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectProviderConfig <a name="DataDatabricksPostgresProjectProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#workspace_id DataDatabricksPostgresProject#workspace_id}.

---

### DataDatabricksPostgresProjectSpec <a name="DataDatabricksPostgresProjectSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectSpec {
	BudgetPolicyId: *string,
	CustomTags: interface{},
	DefaultBranch: *string,
	DefaultEndpointSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings,
	DisplayName: *string,
	EnablePgNativeLogin: interface{},
	HistoryRetentionDuration: *string,
	PgVersion: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags">CustomTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_branch DataDatabricksPostgresProject#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_pg_native_login DataDatabricksPostgresProject#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}. |

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#budget_policy_id DataDatabricksPostgresProject#budget_policy_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.customTags"></a>

```go
CustomTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#custom_tags DataDatabricksPostgresProject#custom_tags}.

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_branch DataDatabricksPostgresProject#default_branch}.

---

##### `DefaultEndpointSettings`<sup>Optional</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.defaultEndpointSettings"></a>

```go
DefaultEndpointSettings DataDatabricksPostgresProjectSpecDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#default_endpoint_settings DataDatabricksPostgresProject#default_endpoint_settings}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#display_name DataDatabricksPostgresProject#display_name}.

---

##### `EnablePgNativeLogin`<sup>Optional</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.enablePgNativeLogin"></a>

```go
EnablePgNativeLogin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#enable_pg_native_login DataDatabricksPostgresProject#enable_pg_native_login}.

---

##### `HistoryRetentionDuration`<sup>Optional</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.historyRetentionDuration"></a>

```go
HistoryRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#history_retention_duration DataDatabricksPostgresProject#history_retention_duration}.

---

##### `PgVersion`<sup>Optional</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec.property.pgVersion"></a>

```go
PgVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_version DataDatabricksPostgresProject#pg_version}.

---

### DataDatabricksPostgresProjectSpecCustomTags <a name="DataDatabricksPostgresProjectSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectSpecCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings {
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	NoSuspension: interface{},
	PgSettings: *map[string]*string,
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectStatus <a name="DataDatabricksPostgresProjectStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectStatus {

}
```


### DataDatabricksPostgresProjectStatusCustomTags <a name="DataDatabricksPostgresProjectStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectStatusCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#key DataDatabricksPostgresProject#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#value DataDatabricksPostgresProject#value}.

---

### DataDatabricksPostgresProjectStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

&datadatabrickspostgresproject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings {
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	NoSuspension: interface{},
	PgSettings: *map[string]*string,
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_max_cu DataDatabricksPostgresProject#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#autoscaling_limit_min_cu DataDatabricksPostgresProject#autoscaling_limit_min_cu}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#no_suspension DataDatabricksPostgresProject#no_suspension}.

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#pg_settings DataDatabricksPostgresProject#pg_settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.122.0/docs/data-sources/postgres_project#suspend_timeout_duration DataDatabricksPostgresProject#suspend_timeout_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectInitialBranchSpecOutputReference <a name="DataDatabricksPostgresProjectInitialBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectInitialBranchSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectInitialBranchSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resetIsProtected">ResetIsProtected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsProtected` <a name="ResetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.resetIsProtected"></a>

```go
func ResetIsProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtectedInput">IsProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec">DataDatabricksPostgresProjectInitialBranchSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsProtectedInput`<sup>Optional</sup> <a name="IsProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtectedInput"></a>

```go
func IsProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.isProtected"></a>

```go
func IsProtected() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectInitialBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialBranchSpec">DataDatabricksPostgresProjectInitialBranchSpec</a>

---


### DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectInitialEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectInitialEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup"></a>

```go
func PutGroup(value DataDatabricksPostgresProjectInitialEndpointSpecGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroup">DataDatabricksPostgresProjectInitialEndpointSpecGroup</a>

---

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.group"></a>

```go
func Group() DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectInitialEndpointSpecGroupOutputReference</a>

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectInitialEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectInitialEndpointSpec">DataDatabricksPostgresProjectInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectProviderConfigOutputReference <a name="DataDatabricksPostgresProjectProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectSpecCustomTagsList <a name="DataDatabricksPostgresProjectSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectSpecCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresProjectSpecCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresProjectSpecCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectSpecCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresProjectSpecCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectSpecOutputReference <a name="DataDatabricksPostgresProjectSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings">PutDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings">ResetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetEnablePgNativeLogin">ResetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration">ResetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion">ResetPgVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags"></a>

```go
func PutCustomTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultEndpointSettings` <a name="PutDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings"></a>

```go
func PutDefaultEndpointSettings(value DataDatabricksPostgresProjectSpecDefaultEndpointSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettings">DataDatabricksPostgresProjectSpecDefaultEndpointSettings</a>

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultBranch"></a>

```go
func ResetDefaultBranch()
```

##### `ResetDefaultEndpointSettings` <a name="ResetDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDefaultEndpointSettings"></a>

```go
func ResetDefaultEndpointSettings()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnablePgNativeLogin` <a name="ResetEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetEnablePgNativeLogin"></a>

```go
func ResetEnablePgNativeLogin()
```

##### `ResetHistoryRetentionDuration` <a name="ResetHistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetHistoryRetentionDuration"></a>

```go
func ResetHistoryRetentionDuration()
```

##### `ResetPgVersion` <a name="ResetPgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.resetPgVersion"></a>

```go
func ResetPgVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput">DefaultEndpointSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLoginInput">EnablePgNativeLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput">HistoryRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput">PgVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTags"></a>

```go
func CustomTags() DataDatabricksPostgresProjectSpecCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecCustomTagsList">DataDatabricksPostgresProjectSpecCustomTagsList</a>

---

##### `DefaultEndpointSettings`<sup>Required</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettings"></a>

```go
func DefaultEndpointSettings() DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectSpecDefaultEndpointSettingsOutputReference</a>

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `DefaultEndpointSettingsInput`<sup>Optional</sup> <a name="DefaultEndpointSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```go
func DefaultEndpointSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablePgNativeLoginInput`<sup>Optional</sup> <a name="EnablePgNativeLoginInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLoginInput"></a>

```go
func EnablePgNativeLoginInput() interface{}
```

- *Type:* interface{}

---

##### `HistoryRetentionDurationInput`<sup>Optional</sup> <a name="HistoryRetentionDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDurationInput"></a>

```go
func HistoryRetentionDurationInput() *string
```

- *Type:* *string

---

##### `PgVersionInput`<sup>Optional</sup> <a name="PgVersionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersionInput"></a>

```go
func PgVersionInput() *f64
```

- *Type:* *f64

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.enablePgNativeLogin"></a>

```go
func EnablePgNativeLogin() interface{}
```

- *Type:* interface{}

---

##### `HistoryRetentionDuration`<sup>Required</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.historyRetentionDuration"></a>

```go
func HistoryRetentionDuration() *string
```

- *Type:* *string

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.pgVersion"></a>

```go
func PgVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectSpec">DataDatabricksPostgresProjectSpec</a>

---


### DataDatabricksPostgresProjectStatusCustomTagsList <a name="DataDatabricksPostgresProjectStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectStatusCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresProjectStatusCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresProjectStatusCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectStatusCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresProjectStatusCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectStatusCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTags">DataDatabricksPostgresProjectStatusCustomTags</a>

---


### DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectStatusDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettings">DataDatabricksPostgresProjectStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectStatusOutputReference <a name="DataDatabricksPostgresProjectStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v17/datadatabrickspostgresproject"

datadatabrickspostgresproject.NewDataDatabricksPostgresProjectStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes">BranchLogicalSizeLimitBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.computeLastActiveTime">ComputeLastActiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes">SyntheticStorageSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchLogicalSizeLimitBytes`<sup>Required</sup> <a name="BranchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```go
func BranchLogicalSizeLimitBytes() *f64
```

- *Type:* *f64

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `ComputeLastActiveTime`<sup>Required</sup> <a name="ComputeLastActiveTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.computeLastActiveTime"></a>

```go
func ComputeLastActiveTime() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.customTags"></a>

```go
func CustomTags() DataDatabricksPostgresProjectStatusCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusCustomTagsList">DataDatabricksPostgresProjectStatusCustomTagsList</a>

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `DefaultEndpointSettings`<sup>Required</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.defaultEndpointSettings"></a>

```go
func DefaultEndpointSettings() DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectStatusDefaultEndpointSettingsOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.enablePgNativeLogin"></a>

```go
func EnablePgNativeLogin() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HistoryRetentionDuration`<sup>Required</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.historyRetentionDuration"></a>

```go
func HistoryRetentionDuration() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.pgVersion"></a>

```go
func PgVersion() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SyntheticStorageSizeBytes`<sup>Required</sup> <a name="SyntheticStorageSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```go
func SyntheticStorageSizeBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProject.DataDatabricksPostgresProjectStatus">DataDatabricksPostgresProjectStatus</a>

---




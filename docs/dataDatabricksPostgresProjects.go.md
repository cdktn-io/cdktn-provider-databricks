# `dataDatabricksPostgresProjects` Submodule <a name="`dataDatabricksPostgresProjects` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresProjects <a name="DataDatabricksPostgresProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects databricks_postgres_projects}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjects(scope Construct, id *string, config DataDatabricksPostgresProjectsConfig) DataDatabricksPostgresProjects
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig">DataDatabricksPostgresProjectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig">DataDatabricksPostgresProjectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted">ResetShowDeleted</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresProjectsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetPageSize"></a>

```go
func ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```

##### `ResetShowDeleted` <a name="ResetShowDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.resetShowDeleted"></a>

```go
func ResetShowDeleted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.DataDatabricksPostgresProjects_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.DataDatabricksPostgresProjects_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.DataDatabricksPostgresProjects_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.DataDatabricksPostgresProjects_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataDatabricksPostgresProjects resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksPostgresProjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksPostgresProjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresProjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects">Projects</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput">PageSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput">ShowDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize">PageSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.projects"></a>

```go
func Projects() DataDatabricksPostgresProjectsProjectsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList">DataDatabricksPostgresProjectsProjectsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresProjectsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSizeInput"></a>

```go
func PageSizeInput() *f64
```

- *Type:* *f64

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ShowDeletedInput`<sup>Optional</sup> <a name="ShowDeletedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeletedInput"></a>

```go
func ShowDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.pageSize"></a>

```go
func PageSize() *f64
```

- *Type:* *f64

---

##### `ShowDeleted`<sup>Required</sup> <a name="ShowDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.showDeleted"></a>

```go
func ShowDeleted() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjects.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresProjectsConfig <a name="DataDatabricksPostgresProjectsConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PageSize: *f64,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig,
	ShowDeleted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize">PageSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted">ShowDeleted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.pageSize"></a>

```go
PageSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#page_size DataDatabricksPostgresProjects#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresProjectsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig">DataDatabricksPostgresProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

##### `ShowDeleted`<sup>Optional</sup> <a name="ShowDeleted" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsConfig.property.showDeleted"></a>

```go
ShowDeleted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#show_deleted DataDatabricksPostgresProjects#show_deleted}.

---

### DataDatabricksPostgresProjectsProjects <a name="DataDatabricksPostgresProjectsProjects" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjects {
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#name DataDatabricksPostgresProjects#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects.property.providerConfig"></a>

```go
ProviderConfig DataDatabricksPostgresProjectsProjectsProviderConfig
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#provider_config DataDatabricksPostgresProjects#provider_config}.

---

### DataDatabricksPostgresProjectsProjectsInitialBranchSpec <a name="DataDatabricksPostgresProjectsProjectsInitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec {
	IsProtected: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#is_protected DataDatabricksPostgresProjects#is_protected}. |

---

##### `IsProtected`<sup>Optional</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec.property.isProtected"></a>

```go
IsProtected interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#is_protected DataDatabricksPostgresProjects#is_protected}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpec <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec {
	AutoscalingLimitMaxCu: *f64,
	AutoscalingLimitMinCu: *f64,
	Group: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup,
	NoSuspension: interface{},
	SuspendTimeoutDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.group"></a>

```go
Group DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#group DataDatabricksPostgresProjects#group}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup {
	Max: *f64,
	Min: *f64,
	EnableReadableSecondaries: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#max DataDatabricksPostgresProjects#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#min DataDatabricksPostgresProjects#min}.

---

##### `EnableReadableSecondaries`<sup>Optional</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup.property.enableReadableSecondaries"></a>

```go
EnableReadableSecondaries interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#enable_readable_secondaries DataDatabricksPostgresProjects#enable_readable_secondaries}.

---

### DataDatabricksPostgresProjectsProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

### DataDatabricksPostgresProjectsProjectsSpec <a name="DataDatabricksPostgresProjectsProjectsSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsSpec {
	BudgetPolicyId: *string,
	CustomTags: interface{},
	DefaultBranch: *string,
	DefaultEndpointSettings: github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings,
	DisplayName: *string,
	EnablePgNativeLogin: interface{},
	HistoryRetentionDuration: *string,
	PgVersion: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags">CustomTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}. |

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#budget_policy_id DataDatabricksPostgresProjects#budget_policy_id}.

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.customTags"></a>

```go
CustomTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#custom_tags DataDatabricksPostgresProjects#custom_tags}.

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#default_branch DataDatabricksPostgresProjects#default_branch}.

---

##### `DefaultEndpointSettings`<sup>Optional</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.defaultEndpointSettings"></a>

```go
DefaultEndpointSettings DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#default_endpoint_settings DataDatabricksPostgresProjects#default_endpoint_settings}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#display_name DataDatabricksPostgresProjects#display_name}.

---

##### `EnablePgNativeLogin`<sup>Optional</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.enablePgNativeLogin"></a>

```go
EnablePgNativeLogin interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#enable_pg_native_login DataDatabricksPostgresProjects#enable_pg_native_login}.

---

##### `HistoryRetentionDuration`<sup>Optional</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.historyRetentionDuration"></a>

```go
HistoryRetentionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#history_retention_duration DataDatabricksPostgresProjects#history_retention_duration}.

---

##### `PgVersion`<sup>Optional</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec.property.pgVersion"></a>

```go
PgVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_version DataDatabricksPostgresProjects#pg_version}.

---

### DataDatabricksPostgresProjectsProjectsSpecCustomTags <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsSpecCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProjectsStatus <a name="DataDatabricksPostgresProjectsProjectsStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsStatus {

}
```


### DataDatabricksPostgresProjectsProjectsStatusCustomTags <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsStatusCustomTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#key DataDatabricksPostgresProjects#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#value DataDatabricksPostgresProjects#value}.

---

### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings {
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
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}. |

---

##### `AutoscalingLimitMaxCu`<sup>Optional</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMaxCu"></a>

```go
AutoscalingLimitMaxCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_max_cu DataDatabricksPostgresProjects#autoscaling_limit_max_cu}.

---

##### `AutoscalingLimitMinCu`<sup>Optional</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.autoscalingLimitMinCu"></a>

```go
AutoscalingLimitMinCu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#autoscaling_limit_min_cu DataDatabricksPostgresProjects#autoscaling_limit_min_cu}.

---

##### `NoSuspension`<sup>Optional</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.noSuspension"></a>

```go
NoSuspension interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#no_suspension DataDatabricksPostgresProjects#no_suspension}.

---

##### `PgSettings`<sup>Optional</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.pgSettings"></a>

```go
PgSettings *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#pg_settings DataDatabricksPostgresProjects#pg_settings}.

---

##### `SuspendTimeoutDuration`<sup>Optional</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings.property.suspendTimeoutDuration"></a>

```go
SuspendTimeoutDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#suspend_timeout_duration DataDatabricksPostgresProjects#suspend_timeout_duration}.

---

### DataDatabricksPostgresProjectsProviderConfig <a name="DataDatabricksPostgresProjectsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

&datadatabrickspostgresprojects.DataDatabricksPostgresProjectsProviderConfig {
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/postgres_projects#workspace_id DataDatabricksPostgresProjects#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resetIsProtected">ResetIsProtected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsProtected` <a name="ResetIsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.resetIsProtected"></a>

```go
func ResetIsProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtectedInput">IsProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtected">IsProtected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec">DataDatabricksPostgresProjectsProjectsInitialBranchSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsProtectedInput`<sup>Optional</sup> <a name="IsProtectedInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtectedInput"></a>

```go
func IsProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `IsProtected`<sup>Required</sup> <a name="IsProtected" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.isProtected"></a>

```go
func IsProtected() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsInitialBranchSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpec">DataDatabricksPostgresProjectsProjectsInitialBranchSpec</a>

---


### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries">ResetEnableReadableSecondaries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableReadableSecondaries` <a name="ResetEnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.resetEnableReadableSecondaries"></a>

```go
func ResetEnableReadableSecondaries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput">EnableReadableSecondariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableReadableSecondariesInput`<sup>Optional</sup> <a name="EnableReadableSecondariesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondariesInput"></a>

```go
func EnableReadableSecondariesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.enableReadableSecondaries"></a>

```go
func EnableReadableSecondaries() interface{}
```

- *Type:* interface{}

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup">PutGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGroup` <a name="PutGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup"></a>

```go
func PutGroup(value DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.putGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroup</a>

---

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetGroup"></a>

```go
func ResetGroup()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group">Group</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput">GroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.group"></a>

```go
func Group() DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecGroupOutputReference</a>

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.groupInput"></a>

```go
func GroupInput() interface{}
```

- *Type:* interface{}

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsInitialEndpointSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpec">DataDatabricksPostgresProjectsProjectsInitialEndpointSpec</a>

---


### DataDatabricksPostgresProjectsProjectsList <a name="DataDatabricksPostgresProjectsProjectsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresProjectsProjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresProjectsProjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsOutputReference <a name="DataDatabricksPostgresProjectsProjectsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresProjectsProjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig"></a>

```go
func PutProviderConfig(value DataDatabricksPostgresProjectsProjectsProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfig">DataDatabricksPostgresProjectsProjectsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.resetProviderConfig"></a>

```go
func ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialBranchSpec">InitialBranchSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec">InitialEndpointSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `InitialBranchSpec`<sup>Required</sup> <a name="InitialBranchSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialBranchSpec"></a>

```go
func InitialBranchSpec() DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialBranchSpecOutputReference</a>

---

##### `InitialEndpointSpec`<sup>Required</sup> <a name="InitialEndpointSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.initialEndpointSpec"></a>

```go
func InitialEndpointSpec() DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference">DataDatabricksPostgresProjectsProjectsInitialEndpointSpecOutputReference</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfig"></a>

```go
func ProviderConfig() DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference">DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference</a>

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.spec"></a>

```go
func Spec() DataDatabricksPostgresProjectsProjectsSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference">DataDatabricksPostgresProjectsProjectsSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.status"></a>

```go
func Status() DataDatabricksPostgresProjectsProjectsStatusOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference">DataDatabricksPostgresProjectsProjectsStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjects
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjects">DataDatabricksPostgresProjectsProjects</a>

---


### DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsSpecCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresProjectsProjectsSpecCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsSpecOutputReference <a name="DataDatabricksPostgresProjectsProjectsSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings">PutDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings">ResetDefaultEndpointSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin">ResetEnablePgNativeLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration">ResetHistoryRetentionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion">ResetPgVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags"></a>

```go
func PutCustomTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putCustomTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultEndpointSettings` <a name="PutDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings"></a>

```go
func PutDefaultEndpointSettings(value DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.putDefaultEndpointSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettings</a>

---

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultBranch"></a>

```go
func ResetDefaultBranch()
```

##### `ResetDefaultEndpointSettings` <a name="ResetDefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDefaultEndpointSettings"></a>

```go
func ResetDefaultEndpointSettings()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnablePgNativeLogin` <a name="ResetEnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetEnablePgNativeLogin"></a>

```go
func ResetEnablePgNativeLogin()
```

##### `ResetHistoryRetentionDuration` <a name="ResetHistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetHistoryRetentionDuration"></a>

```go
func ResetHistoryRetentionDuration()
```

##### `ResetPgVersion` <a name="ResetPgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.resetPgVersion"></a>

```go
func ResetPgVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput">DefaultEndpointSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput">EnablePgNativeLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput">HistoryRetentionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput">PgVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTags"></a>

```go
func CustomTags() DataDatabricksPostgresProjectsProjectsSpecCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecCustomTagsList">DataDatabricksPostgresProjectsProjectsSpecCustomTagsList</a>

---

##### `DefaultEndpointSettings`<sup>Required</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettings"></a>

```go
func DefaultEndpointSettings() DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsSpecDefaultEndpointSettingsOutputReference</a>

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `DefaultEndpointSettingsInput`<sup>Optional</sup> <a name="DefaultEndpointSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultEndpointSettingsInput"></a>

```go
func DefaultEndpointSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnablePgNativeLoginInput`<sup>Optional</sup> <a name="EnablePgNativeLoginInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLoginInput"></a>

```go
func EnablePgNativeLoginInput() interface{}
```

- *Type:* interface{}

---

##### `HistoryRetentionDurationInput`<sup>Optional</sup> <a name="HistoryRetentionDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDurationInput"></a>

```go
func HistoryRetentionDurationInput() *string
```

- *Type:* *string

---

##### `PgVersionInput`<sup>Optional</sup> <a name="PgVersionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersionInput"></a>

```go
func PgVersionInput() *f64
```

- *Type:* *f64

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.enablePgNativeLogin"></a>

```go
func EnablePgNativeLogin() interface{}
```

- *Type:* interface{}

---

##### `HistoryRetentionDuration`<sup>Required</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.historyRetentionDuration"></a>

```go
func HistoryRetentionDuration() *string
```

- *Type:* *string

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.pgVersion"></a>

```go
func PgVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsSpec
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsSpec">DataDatabricksPostgresProjectsProjectsSpec</a>

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsList <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsStatusCustomTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksPostgresProjectsProjectsStatusCustomTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsStatusCustomTags
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTags">DataDatabricksPostgresProjectsProjectsStatusCustomTags</a>

---


### DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu">ResetAutoscalingLimitMaxCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu">ResetAutoscalingLimitMinCu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension">ResetNoSuspension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings">ResetPgSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration">ResetSuspendTimeoutDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoscalingLimitMaxCu` <a name="ResetAutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMaxCu"></a>

```go
func ResetAutoscalingLimitMaxCu()
```

##### `ResetAutoscalingLimitMinCu` <a name="ResetAutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetAutoscalingLimitMinCu"></a>

```go
func ResetAutoscalingLimitMinCu()
```

##### `ResetNoSuspension` <a name="ResetNoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetNoSuspension"></a>

```go
func ResetNoSuspension()
```

##### `ResetPgSettings` <a name="ResetPgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetPgSettings"></a>

```go
func ResetPgSettings()
```

##### `ResetSuspendTimeoutDuration` <a name="ResetSuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.resetSuspendTimeoutDuration"></a>

```go
func ResetSuspendTimeoutDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput">AutoscalingLimitMaxCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput">AutoscalingLimitMinCuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput">NoSuspensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput">PgSettingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput">SuspendTimeoutDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu">AutoscalingLimitMaxCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu">AutoscalingLimitMinCu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension">NoSuspension</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings">PgSettings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration">SuspendTimeoutDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMaxCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCuInput"></a>

```go
func AutoscalingLimitMaxCuInput() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCuInput`<sup>Optional</sup> <a name="AutoscalingLimitMinCuInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCuInput"></a>

```go
func AutoscalingLimitMinCuInput() *f64
```

- *Type:* *f64

---

##### `NoSuspensionInput`<sup>Optional</sup> <a name="NoSuspensionInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspensionInput"></a>

```go
func NoSuspensionInput() interface{}
```

- *Type:* interface{}

---

##### `PgSettingsInput`<sup>Optional</sup> <a name="PgSettingsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettingsInput"></a>

```go
func PgSettingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDurationInput`<sup>Optional</sup> <a name="SuspendTimeoutDurationInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDurationInput"></a>

```go
func SuspendTimeoutDurationInput() *string
```

- *Type:* *string

---

##### `AutoscalingLimitMaxCu`<sup>Required</sup> <a name="AutoscalingLimitMaxCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMaxCu"></a>

```go
func AutoscalingLimitMaxCu() *f64
```

- *Type:* *f64

---

##### `AutoscalingLimitMinCu`<sup>Required</sup> <a name="AutoscalingLimitMinCu" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.autoscalingLimitMinCu"></a>

```go
func AutoscalingLimitMinCu() *f64
```

- *Type:* *f64

---

##### `NoSuspension`<sup>Required</sup> <a name="NoSuspension" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.noSuspension"></a>

```go
func NoSuspension() interface{}
```

- *Type:* interface{}

---

##### `PgSettings`<sup>Required</sup> <a name="PgSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.pgSettings"></a>

```go
func PgSettings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SuspendTimeoutDuration`<sup>Required</sup> <a name="SuspendTimeoutDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.suspendTimeoutDuration"></a>

```go
func SuspendTimeoutDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettings</a>

---


### DataDatabricksPostgresProjectsProjectsStatusOutputReference <a name="DataDatabricksPostgresProjectsProjectsStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProjectsStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProjectsStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes">BranchLogicalSizeLimitBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.computeLastActiveTime">ComputeLastActiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings">DefaultEndpointSettings</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration">HistoryRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion">PgVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes">SyntheticStorageSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchLogicalSizeLimitBytes`<sup>Required</sup> <a name="BranchLogicalSizeLimitBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.branchLogicalSizeLimitBytes"></a>

```go
func BranchLogicalSizeLimitBytes() *f64
```

- *Type:* *f64

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `ComputeLastActiveTime`<sup>Required</sup> <a name="ComputeLastActiveTime" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.computeLastActiveTime"></a>

```go
func ComputeLastActiveTime() *string
```

- *Type:* *string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.customTags"></a>

```go
func CustomTags() DataDatabricksPostgresProjectsProjectsStatusCustomTagsList
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusCustomTagsList">DataDatabricksPostgresProjectsProjectsStatusCustomTagsList</a>

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `DefaultEndpointSettings`<sup>Required</sup> <a name="DefaultEndpointSettings" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.defaultEndpointSettings"></a>

```go
func DefaultEndpointSettings() DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference">DataDatabricksPostgresProjectsProjectsStatusDefaultEndpointSettingsOutputReference</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.enablePgNativeLogin"></a>

```go
func EnablePgNativeLogin() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HistoryRetentionDuration`<sup>Required</sup> <a name="HistoryRetentionDuration" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.historyRetentionDuration"></a>

```go
func HistoryRetentionDuration() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.pgVersion"></a>

```go
func PgVersion() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SyntheticStorageSizeBytes`<sup>Required</sup> <a name="SyntheticStorageSizeBytes" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.syntheticStorageSizeBytes"></a>

```go
func SyntheticStorageSizeBytes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksPostgresProjectsProjectsStatus
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProjectsStatus">DataDatabricksPostgresProjectsProjectsStatus</a>

---


### DataDatabricksPostgresProjectsProviderConfigOutputReference <a name="DataDatabricksPostgresProjectsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-databricks-go/databricks/v18/datadatabrickspostgresprojects"

datadatabrickspostgresprojects.NewDataDatabricksPostgresProjectsProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksPostgresProjectsProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresProjects.DataDatabricksPostgresProjectsProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




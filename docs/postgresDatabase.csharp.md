# `postgresDatabase` Submodule <a name="`postgresDatabase` Submodule" id="@cdktn/provider-databricks.postgresDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresDatabase <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database databricks_postgres_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabase(Construct Scope, string Id, PostgresDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig">PostgresDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig">PostgresDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putProviderConfig"></a>

```csharp
private void PutProviderConfig(PostgresDatabaseProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putSpec"></a>

```csharp
private void PutSpec(PostgresDatabaseSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a>

---

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

PostgresDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PostgresDatabase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PostgresDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference">PostgresDatabaseProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference">PostgresDatabaseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference">PostgresDatabaseStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.providerConfig"></a>

```csharp
public PostgresDatabaseProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference">PostgresDatabaseProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.spec"></a>

```csharp
public PostgresDatabaseSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference">PostgresDatabaseSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.status"></a>

```csharp
public PostgresDatabaseStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference">PostgresDatabaseStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.providerConfigInput"></a>

```csharp
public IResolvable|PostgresDatabaseProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.specInput"></a>

```csharp
public IResolvable|PostgresDatabaseSpec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a>

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresDatabaseConfig <a name="PostgresDatabaseConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string DatabaseId = null,
    PostgresDatabaseProviderConfig ProviderConfig = null,
    PostgresDatabaseSpec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#parent PostgresDatabase#parent}. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#database_id PostgresDatabase#database_id}. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#provider_config PostgresDatabase#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#spec PostgresDatabase#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#parent PostgresDatabase#parent}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#database_id PostgresDatabase#database_id}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.providerConfig"></a>

```csharp
public PostgresDatabaseProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#provider_config PostgresDatabase#provider_config}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseConfig.property.spec"></a>

```csharp
public PostgresDatabaseSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#spec PostgresDatabase#spec}.

---

### PostgresDatabaseProviderConfig <a name="PostgresDatabaseProviderConfig" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#workspace_id PostgresDatabase#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#workspace_id PostgresDatabase#workspace_id}.

---

### PostgresDatabaseSpec <a name="PostgresDatabaseSpec" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseSpec {
    string PostgresDatabase = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#postgres_database PostgresDatabase#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#role PostgresDatabase#role}. |

---

##### `PostgresDatabase`<sup>Optional</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#postgres_database PostgresDatabase#postgres_database}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#role PostgresDatabase#role}.

---

### PostgresDatabaseStatus <a name="PostgresDatabaseStatus" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseStatus {
    string PostgresDatabase = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#postgres_database PostgresDatabase#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#role PostgresDatabase#role}. |

---

##### `PostgresDatabase`<sup>Optional</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#postgres_database PostgresDatabase#postgres_database}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/postgres_database#role PostgresDatabase#role}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresDatabaseProviderConfigOutputReference <a name="PostgresDatabaseProviderConfigOutputReference" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresDatabaseProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseProviderConfig">PostgresDatabaseProviderConfig</a>

---


### PostgresDatabaseSpecOutputReference <a name="PostgresDatabaseSpecOutputReference" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resetPostgresDatabase">ResetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostgresDatabase` <a name="ResetPostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resetPostgresDatabase"></a>

```csharp
private void ResetPostgresDatabase()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresDatabaseSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseSpec">PostgresDatabaseSpec</a>

---


### PostgresDatabaseStatusOutputReference <a name="PostgresDatabaseStatusOutputReference" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new PostgresDatabaseStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resetPostgresDatabase">ResetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostgresDatabase` <a name="ResetPostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resetPostgresDatabase"></a>

```csharp
private void ResetPostgresDatabase()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus">PostgresDatabaseStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatusOutputReference.property.internalValue"></a>

```csharp
public PostgresDatabaseStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.postgresDatabase.PostgresDatabaseStatus">PostgresDatabaseStatus</a>

---



